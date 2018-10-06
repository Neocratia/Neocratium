import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Decision } from '../../core/models/decision.model';

@Injectable({
	providedIn: 'root'
})
export class VotesService {
	decisionsCollection: AngularFirestoreCollection<Decision>;
	decisions: Observable<Decision[]>;

	public yes: number;
	private _no: number;
	private _blank: number;

	public get no(): number {
		return this._no;
	}

	public get blank(): number {
		return this._blank;
	}

	constructor(private afs: AngularFirestore) {}

	getVotes(decisionId: string) {
		this.afs
			.collection('decisions')
			.doc(decisionId)
			.ref.get()
			.then(doc => {
				this.yes = doc.data().votes.yes;
				this._no = doc.data().votes.yes;
				this._blank = doc.data().votes.blank;
			});
	}
}
