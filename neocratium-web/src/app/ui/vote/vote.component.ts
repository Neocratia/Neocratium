import { Decision } from './../../core/models/decision.model';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DecisionsService } from '../../shared/services/decisions.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { User } from '../../core/models/user.model';
import { VoteService } from '../../shared/services/vote.service';

@Component({
	selector: 'app-vote',
	templateUrl: './vote.component.html',
	styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
	_decisionId: string;
	_userId: string;

	votes: Observable<any>;
	avgYes: Observable<any>;
	avgNo: Observable<any>;
	avgBlank: Observable<any>;

	private userDoc: AngularFirestoreDocument<User>;
	private decisionDoc: AngularFirestoreDocument<Decision>;

	user: Observable<User>;
	decision: Observable<Decision>;

	panelOpenState = false;

	constructor(private activatedRoute: ActivatedRoute, private afs: AngularFirestore, public voteService: VoteService) {
		this.activatedRoute.params.subscribe(params => {
			this._decisionId = params['id'];
		});
		this._userId = firebase.auth().currentUser.uid;
	}

	ngOnInit() {
		this.decisionDoc = this.afs.doc<Decision>('decisions/' + this._decisionId);
		this.decision = this.decisionDoc.valueChanges();

		this.userDoc = this.afs.doc<User>('users/' + this._userId);
		this.user = this.userDoc.valueChanges();

		this.votes = this.voteService.getDecisionVotes(this.decisionId);
		this.getResults();
	}

	getResults() {
		this.avgYes = this.votes.map(arr => {
			const votes = arr.map(v => v.value);
			if (votes.length === 0) {
				return 0;
			} else {
				let votesYes = 0;
				votes.forEach(vote => {
					if (vote === 'si') {
						votesYes++;
					}
				});
				return votesYes / votes.length;
			}
		});

		this.avgNo = this.votes.map(arr => {
			const votes = arr.map(v => v.value);
			if (votes.length === 0) {
				return 0;
			} else {
				let votesNo = 0;
				votes.forEach(vote => {
					if (vote === 'no') {
						votesNo++;
					}
				});
				return votesNo / votes.length;
			}
		});

		this.avgBlank = this.votes.map(arr => {
			const votes = arr.map(v => v.value);
			if (votes.length === 0) {
				return 0;
			} else {
				let votesBlank = 0;
				votes.forEach(vote => {
					if (vote === 'blanco') {
						votesBlank++;
					}
				});
				return votesBlank / votes.length;
			}
		});
	}

	get decisionId() {
		return this.decisionDoc.ref.id;
	}

	get userId() {
		return this.decisionDoc.ref.id;
	}
}
