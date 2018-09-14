// Angular //
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '../../node_modules/@angular/forms';

// Firebase //
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { CoreModule } from './services/core/core.module';

// Material //
import {
	MatButtonModule,
	MatCheckboxModule,
	MatToolbarModule,
	MatIconModule,
	MatButtonToggleModule,
	MatTabsModule,
	MatListModule,
	MatFormFieldModule,
	MatSelectModule,
	MatInputModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatSnackBarModule,
	MatProgressSpinnerModule,
	MatDialogModule
} from '@angular/material';

// Neocratium Components //
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { DecisionsComponent } from './components/decisions/decisions.component';
import { AppRoutingModule } from './/app-routing.module';
import { VoteComponent } from './components/decisions/vote/vote.component';
import { VoteDecisionComponent } from './components/vote-decision/vote-decision.component';
import { DelegateDialogComponent } from './components/vote-decision/delegate-dialog/delegate-dialog.component';

// Neocratium Services //
import { DecisionsService } from './services/decisions.service';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateComponent } from './components/decisions/create/create.component';
import { AuthService } from './services/core/auth.service';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		DecisionsComponent,
		ProfileComponent,
		CreateComponent,
		VoteComponent,
		VoteDecisionComponent,
		DelegateDialogComponent
	],
	imports: [
		// Angular //
		BrowserModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		FormsModule,
		// Firebase //
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFirestoreModule.enablePersistence(),
		AngularFirestoreModule,
		CoreModule,
		// Material //
		MatButtonModule,
		MatCheckboxModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonToggleModule,
		AppRoutingModule,
		MatTabsModule,
		MatListModule,
		MatFormFieldModule,
		MatSelectModule,
		MatInputModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatSnackBarModule,
		MatProgressSpinnerModule,
		MatDialogModule
	],
	exports: [
		MatButtonModule,
		MatCheckboxModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonToggleModule,
		AppRoutingModule,
		MatTabsModule,
		MatListModule
	],
	providers: [DecisionsService, AuthService],
	bootstrap: [AppComponent],
	entryComponents: [DelegateDialogComponent]
})
export class AppModule {}
