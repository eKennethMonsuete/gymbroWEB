import { TestBed } from '@angular/core/testing';

import { ListExclusiveWorkoutService } from './list-exclusive-workout.service';

describe('ListExclusiveWorkoutService', () => {
  let service: ListExclusiveWorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListExclusiveWorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
