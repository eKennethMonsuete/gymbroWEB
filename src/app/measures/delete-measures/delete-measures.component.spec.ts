import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMeasuresComponent } from './delete-measures.component';

describe('DeleteMeasuresComponent', () => {
  let component: DeleteMeasuresComponent;
  let fixture: ComponentFixture<DeleteMeasuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMeasuresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
