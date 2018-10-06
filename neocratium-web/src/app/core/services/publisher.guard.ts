import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable({
	providedIn: 'root'
})
export class PublisherGuard implements CanActivate {
	constructor(private auth: AuthService, private router: Router, private snackBar: MatSnackBar) {}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		return this.auth.user
			.take(1)
			.map(user => user.roles['admin'] || user.roles['publisher'])
			.do(loggedIn => {
				if (!loggedIn) {
					// console.log('access denied');
					this.snackBar.open(`Sólo aliados pueden crear decisiones`, 'OK', {
						duration: 2000
					});
					this.router.navigate(['/']);
				}
			});
	}
}
