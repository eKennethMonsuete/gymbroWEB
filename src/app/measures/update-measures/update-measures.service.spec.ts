import { TestBed } from '@angular/core/testing';

import { UpdateMeasuresService } from './update-measures.service';

describe('UpdateMeasuresService', () => {
  let service: UpdateMeasuresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateMeasuresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
