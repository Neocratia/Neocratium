import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import { User } from '../models/user.model';


@Injectable({
	providedIn: 'root'
})
export class AuthService {
	usersCollection: AngularFirestoreCollection<User>;
	users: Observable<User[]>;
	public user: Observable<User>;

	constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
		this.user = this.afAuth.authState.switchMap(user => {
			if (user) {
				return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
			} else {
				return of(null);
			}
		});
	}

	googleLogin() {
		const provider = new firebase.auth.GoogleAuthProvider();
		return this.oAuthLogin(provider);
	}

	facebookLogin() {
		const provider = new firebase.auth.FacebookAuthProvider();
		return this.oAuthLogin(provider);
	}

	twitterLogin() {
		const provider = new firebase.auth.TwitterAuthProvider();
		return this.oAuthLogin(provider);
	}

	signOut() {
		this.afAuth.auth.signOut().then(() => {
			this.router.navigate(['/']);
		});
	}

	private oAuthLogin(provider) {
		return this.afAuth.auth.signInWithPopup(provider).then(credential => {
			this.updateUserData(credential.user);
		});
	}

	private updateUserData(user) {
		const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

		const data: User = {
			uid: user.uid,
			email: user.email,
			photoURL: user.photoURL,
			displayName: user.displayName,
			roles: {
				citizen: true,
				publisher: false,
				admin: false
			},
			ageRange: '',
			monthlyIincomes: '',
			nationality: '',
			residence: ''
		};

		return userRef.set(data, { merge: true });
	}

	getUsers() {
		this.usersCollection = this.afs.collection('users', ref => ref.orderBy('displayName', 'asc'));
		this.users = this.usersCollection.valueChanges();
		return this.users;
	}
}
