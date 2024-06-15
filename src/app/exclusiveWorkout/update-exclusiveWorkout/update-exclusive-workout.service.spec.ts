import { TestBed } from '@angular/core/testing';

import { UpdateExclusiveWorkoutService } from './update-exclusive-workout.service';

describe('UpdateExclusiveWorkoutService', () => {
  let service: UpdateExclusiveWorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateExclusiveWorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
