import { Component, OnInit, Input } from '@angular/core';
import { VoteService } from './../../services/vote.service';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
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

	public userVote = '';
	public votesOptions = ['si', 'no', 'blanco'];

	constructor(public voteService: VoteService, private dialog: MatDialog, private snackBar: MatSnackBar) {}

	ngOnInit() {
		this.votes = this.voteService.getDecisionVotes(this.decisionId);
	}

	getName(value) {
		return this.voteService.getUserName(value).subscribe();
	}

	voteHandler(value) {
		this.voteService.setVote(this.userId, this.decisionId, value);
	}

	delegateHandler() {
		this.voteService.isRepresentative(this.userId, this.decisionId).subscribe(doc => {
			if (doc.length === 0) {
				const dialogConfig = new MatDialogConfig();
				dialogConfig.autoFocus = true;
				dialogConfig.data = {
					title: `Decisión #${this.decisionId}`,
					userId: this.userId
				};
				const dialogRef = this.dialog.open(DelegateDialogComponent, dialogConfig);
				dialogRef
					.afterClosed()
					.take(1)
					.subscribe(result => {
						if (result) {
							this.voteService.getUserVote(result.uid, this.decisionId).then(res => {
								if (res) {
									this.voteService.delegateVote(this.userId, this.decisionId, res, true, result.uid);
								} else {
									this.voteService.delegateVote(this.userId, this.decisionId, '', true, result.uid);
								}
							});
						} else {
							console.log('The dialog was closed with no selection');
						}
					});
			} else {
				this.snackBar.open(`Eres representante, no puedes delegar`, 'OK', {
					duration: 2000
				});
			}
		});
	}
}
