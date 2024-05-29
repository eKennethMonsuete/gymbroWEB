import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMeasuresComponent } from './update-measures.component';

describe('UpdateMeasuresComponent', () => {
  let component: UpdateMeasuresComponent;
  let fixture: ComponentFixture<UpdateMeasuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMeasuresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
