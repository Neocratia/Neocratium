import { Component, OnInit, Input } from '@angular/core';
import { VoteService } from './../../services/vote.service';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DelegateDialogComponent } from './delegate-dialog/delegate-dialog.component';

@Component({
	selector: 'app-vote-decision',
	templateUrl: './vote-decision.component.html',
	styleUrls: ['./vote-decision.component.scss']
})
export class VoteDecisionComponent implements OnInit {
	@Input()
	userId;
	@Input()
	decisionId;

	votes: Observable<any>;
	avgYes: Observable<any>;
	avgNo: Observable<any>;
	avgBlank: Observable<any>;

	public userVote = '';
	public votesOptions = ['yes', 'no', 'blank'];

	constructor(private voteService: VoteService, private dialog: MatDialog) {}

	ngOnInit() {
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
					if (vote === 'yes') {
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
					if (vote === 'blank') {
						votesBlank++;
					}
				});
				return votesBlank / votes.length;
			}
		});
	}

	voteHandler(value) {
		this.voteService.setVote(this.userId, this.decisionId, value);
	}

	delegateHandler(): void {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.data = {
			title: `Delegate decision ${this.decisionId}`
		};
		const dialogRef = this.dialog.open(DelegateDialogComponent, dialogConfig);
		dialogRef.afterClosed().take(1).subscribe(result => {
			if (result) {
				this.voteService.getUserVote(result.uid, this.decisionId).then(res => {
					this.voteService.delegateVote(this.userId, this.decisionId, res, true, result.uid);
				});
			} else {
				console.log('The dialog was closed with no selection');
			}
		});
	}
}
