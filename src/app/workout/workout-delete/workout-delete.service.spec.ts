import { TestBed } from '@angular/core/testing';

import { WorkoutDeleteService } from './workout-delete.service';

describe('WorkoutDeleteService', () => {
  let service: WorkoutDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
