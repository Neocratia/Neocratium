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
		this.decisionsService.getDecisions().subscribe(decisions => {
			this.decisions = decisions;
		});

	}
}
