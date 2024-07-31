import { TestBed } from '@angular/core/testing';

import { LfxComponentLibService } from './lfx-component-lib.service';

describe('LfxComponentLibService', () => {
  let service: LfxComponentLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LfxComponentLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
