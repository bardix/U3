import { TestBed } from '@angular/core/testing';

import { ProdottiserviceService } from './prodottiservice.service';

describe('ProdottiserviceService', () => {
  let service: ProdottiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdottiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
