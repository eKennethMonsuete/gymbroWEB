import { TestBed } from '@angular/core/testing';

import { ListMeasuresService } from './list-measures.service';

describe('ListMeasuresService', () => {
  let service: ListMeasuresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListMeasuresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
