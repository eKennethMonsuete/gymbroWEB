import { TestBed } from '@angular/core/testing';

import { DeleteExclusiveWorkoutService } from './delete-exclusive-workout.service';

describe('DeleteExclusiveWorkoutService', () => {
  let service: DeleteExclusiveWorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteExclusiveWorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
