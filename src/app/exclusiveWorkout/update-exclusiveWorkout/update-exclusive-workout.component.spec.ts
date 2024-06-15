import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExclusiveWorkoutComponent } from './update-exclusive-workout.component';

describe('UpdateExclusiveWorkoutComponent', () => {
  let component: UpdateExclusiveWorkoutComponent;
  let fixture: ComponentFixture<UpdateExclusiveWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateExclusiveWorkoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateExclusiveWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
