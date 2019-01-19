import { PublisherGuard } from './core/services/publisher.guard';
// Angular Core //
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Neocratium Components //
import { DecisionsComponent } from './ui/decisions/decisions.component';
import { ProfileComponent } from './ui/profile/profile.component';
import { CreateComponent } from './ui/create/create.component';
import { VoteComponent } from './ui/vote/vote.component';
import { ForumComponent } from './shared/components/forum/forum.component';

// Guards //
import { AuthGuard } from './core/services/auth.guard';


const routes: Routes = [
	{ path: '', component: ProfileComponent },
	{ path: 'decisions', component: DecisionsComponent, canActivate: [AuthGuard] },
	{ path: 'decisions/:id', component: VoteComponent, canActivate: [AuthGuard] },
	{ path: 'forum', component: ForumComponent, canActivate: [AuthGuard] },
	{ path: 'create', component: CreateComponent, canActivate: [PublisherGuard] }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
