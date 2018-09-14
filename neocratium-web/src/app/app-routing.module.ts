// Angular Core //
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Neocratium Components //
import { DecisionsComponent } from './components/decisions/decisions.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateComponent } from './components/decisions/create/create.component';
import { VoteComponent } from './components/decisions/vote/vote.component';

// Guards //
import { AuthGuard } from './services/core/auth.guard';

const routes: Routes = [
	{ path: '', component: ProfileComponent },
	{ path: 'decisions', component: DecisionsComponent, canActivate: [AuthGuard] },
	{ path: 'decisions/:id', component: VoteComponent, canActivate: [AuthGuard] },
	{ path: 'create', component: CreateComponent, canActivate: [AuthGuard] }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
