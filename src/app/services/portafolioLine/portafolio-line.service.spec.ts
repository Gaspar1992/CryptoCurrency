import { TestBed } from '@angular/core/testing';

import { PortafolioLineService } from './portafolio-line.service';

describe('PortafolioLineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortafolioLineService = TestBed.get(PortafolioLineService);
    expect(service).toBeTruthy();
  });
});
