import { UpdateMeasuresService } from './update-measures.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Measures } from './measures';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-measures',
  templateUrl: './update-measures.component.html',
  styleUrls: ['./update-measures.component.css']
})
export class UpdateMeasuresComponent implements OnInit {


  formMeasuresUpdate!: FormGroup;
  measureId: number = 0;

  constructor(
    private updateMeasuresService: UpdateMeasuresService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.formMeasuresUpdate = this.formBuilder.group({
      weight: ['', [Validators.required, Validators.min(0)]],
      left_biceps: ['', [Validators.required, Validators.min(0)]],
      right_biceps: ['', [Validators.required, Validators.min(0)]],
      waist: ['', [Validators.required, Validators.min(0)]],
      left_quadriceps: ['', [Validators.required, Validators.min(0)]],
      right_quadriceps: ['', [Validators.required, Validators.min(0)]],
      left_calf: ['', [Validators.required, Validators.min(0)]],
      right_calf: ['', [Validators.required, Validators.min(0)]],
      date: ['']
    });
  }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.measureId = id !== null ? +id : 0;

    if (this.measureId) {
      this.updateMeasuresService.findMeasureById(this.measureId).subscribe((measure: Measures) => {
        if (measure) {
          this.formMeasuresUpdate.patchValue(measure);
        }
      });
    }
    console.log(id)
  }

  updateMeasure() {
    if (this.formMeasuresUpdate.valid) {
      const updatedMeasure: Measures = {
        ...this.formMeasuresUpdate.value,
        id: this.measureId
      };

      this.updateMeasuresService.updateMeasure(this.measureId, updatedMeasure).subscribe(
        response => {

          this.router.navigate(['home']);
        },
        error => {
          console.error('Erro ao atualizar medidas', error);
        }
      );
    } else {
      console.error('Formulário inválido');
    }
  }

  cancel() {
    this.router.navigate(['home']);
  }
}
