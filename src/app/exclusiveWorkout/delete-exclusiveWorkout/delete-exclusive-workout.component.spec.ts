import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteExclusiveWorkoutComponent } from './delete-exclusive-workout.component';

describe('DeleteExclusiveWorkoutComponent', () => {
  let component: DeleteExclusiveWorkoutComponent;
  let fixture: ComponentFixture<DeleteExclusiveWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteExclusiveWorkoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteExclusiveWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
