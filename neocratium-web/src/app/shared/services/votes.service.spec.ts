import { TestBed, inject } from '@angular/core/testing';

import { VotesService } from './votes.service';

describe('VotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VotesService]
    });
  });

  it('should be created', inject([VotesService], (service: VotesService) => {
    expect(service).toBeTruthy();
  }));
});
