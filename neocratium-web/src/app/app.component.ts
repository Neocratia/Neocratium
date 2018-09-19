import { Component, ViewChild } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Neocratium';

	@ViewChild('sidenav')
	sideNav: any;
	private toggleNav: any;

	// tslint:disable-next-line:use-life-cycle-interface
	ngAfterViewInit(): any {
		this.toggleNav = () => {
			this.sideNav.toggle();
		};
	}
}
