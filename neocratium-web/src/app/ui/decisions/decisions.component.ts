import { DecisionsService } from './../../shared/services/decisions.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Decision } from '../../core/models/decision.model';

@Component({
	selector: 'app-decisions',
	templateUrl: './decisions.component.html',
	styleUrls: ['./decisions.component.scss']
})
export class DecisionsComponent implements OnInit {
	decisions: Decision[];

	constructor(private decisionsService: DecisionsService) {}

	ngOnInit() {
		console.log('decisions.component >> ngOnInit started');
		this.decisionsService.getDecisions().subscribe(decisions => {
			this.decisions = decisions;
		});

		// this.decisions = [
		// 	{
		// 		title: 'Título',
		// 		description: `description description description description description`,
		// 		decisionId: '1515151515155',
		// 		dateClose: '1515151515155',
		// 		city: '',
		// 		country: '',
		// 		image: '',
		// 		public: true,
		// 		userId: '',
		// 		representatives: {}
		// 	}
		// ];
	}
}
