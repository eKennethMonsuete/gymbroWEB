import { TestBed } from '@angular/core/testing';

import { CreateExclusiveWorkoutService } from './create-exclusive-workout.service';

describe('CreateExclusiveWorkoutService', () => {
  let service: CreateExclusiveWorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateExclusiveWorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
