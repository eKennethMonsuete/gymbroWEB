import { TestBed } from '@angular/core/testing';

import { WorkoutListService } from './workout-list.service';

describe('WorkoutListService', () => {
  let service: WorkoutListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
