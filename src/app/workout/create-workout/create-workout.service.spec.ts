import { TestBed } from '@angular/core/testing';

import { CreateWorkoutService } from './create-workout.service';

describe('CreateWorkoutService', () => {
  let service: CreateWorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateWorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
