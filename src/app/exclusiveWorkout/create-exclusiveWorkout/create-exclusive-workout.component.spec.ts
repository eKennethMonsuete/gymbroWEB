import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExclusiveWorkoutComponent } from './create-exclusive-workout.component';

describe('CreateExclusiveWorkoutComponent', () => {
  let component: CreateExclusiveWorkoutComponent;
  let fixture: ComponentFixture<CreateExclusiveWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExclusiveWorkoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateExclusiveWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
