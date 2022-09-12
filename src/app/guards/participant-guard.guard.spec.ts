import { TestBed } from '@angular/core/testing';

import { ParticipantGuardGuard } from './participant-guard.guard';

describe('ParticipantGuardGuard', () => {
  let guard: ParticipantGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ParticipantGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
