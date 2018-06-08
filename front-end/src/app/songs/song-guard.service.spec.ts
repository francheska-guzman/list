import { TestBed, inject } from '@angular/core/testing';

import { SongGuardService } from './song-guard.service';

describe('SongGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongGuardService]
    });
  });

  it('should be created', inject([SongGuardService], (service: SongGuardService) => {
    expect(service).toBeTruthy();
  }));
});
