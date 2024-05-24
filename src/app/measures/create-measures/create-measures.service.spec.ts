import { TestBed } from '@angular/core/testing';

import { CreateMeasuresService } from './create-measures.service';

describe('CreateMeasuresService', () => {
  let service: CreateMeasuresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateMeasuresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
