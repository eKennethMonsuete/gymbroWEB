import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMeasuresComponent } from './create-measures.component';

describe('CreateMeasuresComponent', () => {
  let component: CreateMeasuresComponent;
  let fixture: ComponentFixture<CreateMeasuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMeasuresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
