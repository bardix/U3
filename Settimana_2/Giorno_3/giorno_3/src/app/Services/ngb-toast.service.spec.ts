import { TestBed } from '@angular/core/testing';

import { NgbToastService } from './ngb-toast.service';

describe('NgbToastService', () => {
  let service: NgbToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgbToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
