import { TestBed } from '@angular/core/testing';

import { HerrmannService } from './herrmann.service';

describe('HerrmannService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HerrmannService = TestBed.get(HerrmannService);
    expect(service).toBeTruthy();
  });
});
