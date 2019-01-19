import { Component, OnInit } from '@angular/core';
import { DecisionsService } from './../../shared/services/decisions.service';
import { Decision } from '../../core/models/decision.model';
import { AuthService } from '../../core/services/auth.service';
import * as firebase from 'firebase';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
	decision: Decision = {
		city: '',
		country: '',
		dateClose: '',
		image: '',
		description: '',
		title: '',
		decisionId: (+new Date()).toString(),
		public: true,
		userId: firebase.auth().currentUser.uid,
		representatives: {}
	};

	constructor(private decisionsService: DecisionsService, private auth: AuthService) {}

	ngOnInit() {
		console.log('Initial Decision Data:' + this.decision.userId);
	}

	onSubmit() {
		console.log('Date close: ' + this.decision.dateClose);
		const dateString = new Date(this.decision.dateClose);
		this.decision.dateClose = dateString.getTime().toString();
		console.log('Date close: ' + this.decision.dateClose);
		this.decisionsService.addDecision(this.decision);
		this.restartDecision();
	}

	restartDecision() {
		this.decision = {
			city: '',
			country: '',
			dateClose: '',
			image: '',
			description: '',
			title: '',
			decisionId: (+new Date()).toString(),
			public: true,
			userId: '',
			representatives: {}
		};
	}
}
