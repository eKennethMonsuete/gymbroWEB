import { TestBed } from '@angular/core/testing';

import { DeleteMeasuresService } from './delete-measures.service';

describe('DeleteMeasuresService', () => {
  let service: DeleteMeasuresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteMeasuresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
