import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Decision } from '../models/decision.model';
import { MatSnackBar } from '@angular/material';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class DecisionsService {
	decisionsCollection: AngularFirestoreCollection<Decision>;
	decisions: Observable<Decision[]>;
	decision: any;

	city: string;
	country: string;
	dateClose: string;
	image: string;
	description: string;
	decisionId: string;
	title: string;
	public = true;
	userId: string;
	representatives: {};

	constructor(private afs: AngularFirestore, public snackBar: MatSnackBar) {}

	getDecisions() {
		this.decisionsCollection = this.afs.collection('decisions', ref => ref.orderBy('decisionId', 'asc'));
		this.decisions = this.decisionsCollection.valueChanges();
		return this.decisions;
	}

	addDecision(decision: Decision) {
		const id = decision.decisionId;
		this.decisionsCollection.doc(id).set(decision);
		this.snackBar.open('Decisión Agregada', 'OK', {
			duration: 2000
		});
	}

	getDecision(id: string) {
		this.decision = this.afs
			.collection('decisions')
			.doc(id).ref.get();
			console.log('getDecision Data: ' + this.decision);
	}
}
