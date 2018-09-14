import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
	imports: [CommonModule, AngularFirestoreModule, AngularFireAuthModule],
	providers: [AuthService]
})
export class CoreModule {}
