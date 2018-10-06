import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	@Input()
	navTitle;

	@Output() openNav = new EventEmitter();

	constructor() {}

	openSideNav(e: any) {
		this.openNav.emit(e);
	}

	ngOnInit() {}

	onClick() {
		//
	}
}
