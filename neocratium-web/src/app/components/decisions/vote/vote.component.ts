import { Decision } from './../../../models/decision.model';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DecisionsService } from '../../../services/decisions.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { User } from '../../../models/user.model';

@Component({
	selector: 'app-vote',
	templateUrl: './vote.component.html',
	styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
	_decisionId: string;
	_userId: string;

	private userDoc: AngularFirestoreDocument<User>;
	private decisionDoc: AngularFirestoreDocument<Decision>;

	user: Observable<Decision>;
	decision: Observable<Decision>;

	// public userVote = '';
	// public votes = ['yes', 'no', 'blank'];
	// loading = true;

	constructor(private activatedRoute: ActivatedRoute, private afs: AngularFirestore) {
		this.activatedRoute.params.subscribe(params => {
			this._decisionId = params['id'];
		});
		this._userId = firebase.auth().currentUser.uid;
	}

	ngOnInit() {
		this.decisionDoc = this.afs.doc<Decision>('decisions/' + this._decisionId);
		this.decision = this.decisionDoc.valueChanges();

		this.userDoc = this.afs.doc<User>('users/' + this._userId);
		this.user = this.decisionDoc.valueChanges();
	}

	get decisionId() {
		return this.decisionDoc.ref.id;
	}

	get userId() {
		return this.decisionDoc.ref.id;
	}
	// voteChange(voteSelected) {
	// 	console.log('Vote: ' + voteSelected);
	// }
}
