import { TestBed } from '@angular/core/testing';

import { WorkoutUpdateService } from './workout-update.service';

describe('WorkoutUpdateService', () => {
  let service: WorkoutUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
