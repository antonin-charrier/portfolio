import { TestBed } from '@angular/core/testing';

import { WipGuard } from './wip.guard';

describe('WipGuard', () => {
  let guard: WipGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WipGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
