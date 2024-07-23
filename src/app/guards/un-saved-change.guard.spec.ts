import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { unSavedChangeGuard } from './un-saved-change.guard';

describe('unSavedChangeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => unSavedChangeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
