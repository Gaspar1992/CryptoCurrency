import { TestBed } from '@angular/core/testing';

import { CurrencyCoversionService } from './currency-coversion.service';

describe('CurrencyCoversionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrencyCoversionService = TestBed.get(CurrencyCoversionService);
    expect(service).toBeTruthy();
  });
});
