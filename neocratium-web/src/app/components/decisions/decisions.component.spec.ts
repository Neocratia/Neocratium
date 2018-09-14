import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionsComponent } from './decisions.component';

describe('DecisionsComponent', () => {
	let component: DecisionsComponent;
	let fixture: ComponentFixture<DecisionsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DecisionsComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DecisionsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
