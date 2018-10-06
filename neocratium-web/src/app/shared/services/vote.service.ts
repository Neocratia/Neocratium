import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import { Vote } from '../../core/models/vote.model';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
	providedIn: 'root'
})
export class VoteService {
	constructor(private afs: AngularFirestore, private snackBar: MatSnackBar) {}

	getUserVotes(userId) {
		const votesRef = this.afs.collection('votes', ref => ref.where('userId', '==', userId));
		return votesRef.valueChanges();
	}

	getDecisionVotes(decisionId) {
		const votesRef = this.afs.collection('votes', ref => ref.where('decisionId', '==', decisionId));
		return votesRef.valueChanges();
	}

	getRepresentativeVotes(userId, value) {
		const docRef = this.afs.collection('votes', ref => ref.where('representative', '==', userId));
		docRef.ref.get().then(res => {
			res.docs.forEach(doc => {
				if (doc.data().representative !== '') {
					this.updateVotes(doc.data(), value);
				}
			});
		});
	}

	isRepresentative(userId, decisionId) {
		const docRef = this.afs.collection('votes', ref => ref.where('decisionId', '==', decisionId).where('representative', '==', userId));
		return docRef.valueChanges();
	}

	getUserName(userId: string) {
		const userRef = this.afs.collection('users', ref => ref.where('uid', '==', userId));
		return userRef.valueChanges();
	}

	getDelegatedVote(userId, decisionId) {
		// console.log('getVote from: ' + userId);
		const votePath = `votes/${userId}_${decisionId}`;
		return this.afs
			.doc(votePath)
			.ref.get()
			.then(docSnapshot => {
				if (docSnapshot.exists) {
					// console.log('Data on the service: ' + docSnapshot.data().value);
					return docSnapshot.data().value;
				}
			});
	}

	getUserVote(userId, decisionId) {
		const votePath = `votes/${userId}_${decisionId}`;
		return this.afs
			.doc(votePath)
			.ref.get()
			.then(docSnapshot => {
				if (docSnapshot.exists) {
					console.log('Data on the service: ' + docSnapshot.data().value);
					return docSnapshot.data().value;
				}
			});
	}

	setVote(userId: string, decisionId: string, value: string, delegated = false, representative = '') {
		const votePath = `votes/${userId}_${decisionId}`;
		const vote: Vote = { userId, decisionId, value, delegated, representative };
		this.getRepresentativeVotes(userId, value);
		return this.afs.doc(votePath).set(vote);
	}

	delegateVote(userId: string, decisionId: string, value: string, delegated = false, representative: string) {
		const vote: Vote = { userId, decisionId, value, delegated, representative };
		const votePath = `votes/${userId}_${decisionId}`;
		return this.afs.doc(votePath).set(vote);
	}

	updateVotes(docData, value) {
		const docPath = `votes/${docData.userId}_${docData.decisionId}`;
		const vote: Vote = {
			userId: docData.userId,
			decisionId: docData.decisionId,
			value: value,
			delegated: docData.delegated,
			representative: docData.representative
		};
		return this.afs.doc(docPath).set(vote);
	}
}
