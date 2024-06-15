import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExclusiveWorkoutComponent } from './list-exclusive-workout.component';

describe('ListExclusiveWorkoutComponent', () => {
  let component: ListExclusiveWorkoutComponent;
  let fixture: ComponentFixture<ListExclusiveWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExclusiveWorkoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListExclusiveWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
