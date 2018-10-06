import { TestBed, inject } from '@angular/core/testing';

import { DecisionsService } from './decisions.service';

describe('DecisionsService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [DecisionsService]
		});
	});

	it('should be created', inject([DecisionsService], (service: DecisionsService) => {
		expect(service).toBeTruthy();
	}));
});
