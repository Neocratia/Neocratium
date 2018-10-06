// Angular //
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '../../node_modules/@angular/forms';

// Firebase //
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { CoreModule } from './core/core.module';

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
	MatDialogModule,
	MatGridListModule,
	MatExpansionModule,
	MatSidenavModule
} from '@angular/material';

// Disqus //
import { DisqusModule } from 'ngx-disqus';

// Neocratium Components //
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { DecisionsComponent } from './ui/decisions/decisions.component';
import { AppRoutingModule } from './/app-routing.module';
import { VoteComponent } from './ui/vote/vote.component';
import { VoteDecisionComponent } from './shared/components/vote-decision/vote-decision.component';
import { DelegateDialogComponent } from './shared/components/vote-decision/delegate-dialog/delegate-dialog.component';

// Neocratium Services //
import { DecisionsService } from './shared/services/decisions.service';
import { ProfileComponent } from './ui/profile/profile.component';
import { CreateComponent } from './ui/create/create.component';
import { AuthService } from './core/services/auth.service';
import { NavmenuComponent } from './core/components/navmenu/navmenu.component';
import { ForumComponent } from './shared/components/forum/forum.component';
import { VoteNamePipe } from './core/pipes/vote-name.pipe';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		DecisionsComponent,
		ProfileComponent,
		CreateComponent,
		VoteComponent,
		VoteDecisionComponent,
		DelegateDialogComponent,
		NavmenuComponent,
		ForumComponent,
		VoteNamePipe
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
		MatDialogModule,
		MatGridListModule,
		MatExpansionModule,
		MatSidenavModule,
		// Disqus //
		DisqusModule.forRoot('neocratium')
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
