import { TestBed } from '@angular/core/testing';

import { AcronymValidateService } from './acronym-validate.service';

describe('AcronymValidateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcronymValidateService = TestBed.get(AcronymValidateService);
    expect(service).toBeTruthy();
  });
});
