import { AuthService } from './../../../../core/services/auth.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-delegate-dialog',
	templateUrl: './delegate-dialog.component.html',
	styleUrls: ['./delegate-dialog.component.scss']
})
export class DelegateDialogComponent implements OnInit {
	title: string;
	userId: string;
	usersToDelegate = new Array();
	selectedUser: string;

	constructor(
		private dialogRef: MatDialogRef<DelegateDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private userService: AuthService,
		private snackBar: MatSnackBar
	) {
		this.title = data.title;
		this.userId = data.userId;
		this.userService.getUsers().subscribe(users => {
			users.forEach(user => {
				if (user.uid !== this.userId) {
					this.usersToDelegate.push(user);
				}
			});
		});
	}

	ngOnInit() {}

	onNoClick(): void {
		console.log('Close from the outside');
		this.dialogRef.close();
	}

	save() {
		this.dialogRef.close(this.selectedUser);
		this.snackBar.open(`Decisión Delegada`, 'OK', {
			duration: 2000
		});
	}

	close() {
		this.dialogRef.close();
	}
}
