import { TestBed } from '@angular/core/testing';

import { FetchWinnersService } from './fetch-winners.service';

describe('FetchWinnersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchWinnersService = TestBed.get(FetchWinnersService);
    expect(service).toBeTruthy();
  });
});
