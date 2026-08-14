import { TestBed } from '@angular/core/testing';

import { Membro } from './membro';

describe('Membro', () => {
  let service: Membro;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Membro);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
