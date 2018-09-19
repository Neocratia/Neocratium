import { AuthService } from './../../../services/core/auth.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';

@Component({
	selector: 'app-delegate-dialog',
	templateUrl: './delegate-dialog.component.html',
	styleUrls: ['./delegate-dialog.component.scss']
})
export class DelegateDialogComponent implements OnInit {
	title: string;
	usersToDelegate: {};
	selectedUser: string;

	constructor(
		private dialogRef: MatDialogRef<DelegateDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private userService: AuthService
	) {
		this.title = data.title;
		this.userService.getUsers().subscribe(users => {
			this.usersToDelegate = users;
		});
	}

	ngOnInit() {}

	onNoClick(): void {
		console.log('Close from the outside');
		this.dialogRef.close();
	}

	save() {
		this.dialogRef.close(this.selectedUser);
	}

	close() {
		this.dialogRef.close();
	}
}
