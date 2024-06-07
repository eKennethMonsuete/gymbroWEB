import { CreateMeasuresService } from './create-measures.service';
import { Component, OnInit } from '@angular/core';
import { Measures } from './measures';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-measures',
  templateUrl: './create-measures.component.html',
  styleUrls: ['./create-measures.component.css']
})
export class CreateMeasuresComponent implements OnInit {

  formMeasuresRegister!: FormGroup;

  constructor(
    private createMeasuresService: CreateMeasuresService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.formMeasuresRegister = this.formBuilder.group({
      weight: new FormControl('', [Validators.required, Validators.min(0)]),
      left_biceps: new FormControl('', [Validators.required, Validators.min(0)]),
      right_biceps: new FormControl('', [Validators.required, Validators.min(0)]),
      waist: new FormControl('', [Validators.required, Validators.min(0)]),
      left_quadriceps: new FormControl('', [Validators.required, Validators.min(0)]),
      right_quadriceps: new FormControl('', [Validators.required, Validators.min(0)]),
      left_calf: new FormControl('', [Validators.required, Validators.min(0)]),
      right_calf: new FormControl('', [Validators.required, Validators.min(0)]),
      date: new FormControl('', ),
      user_id: new FormControl('')
    });
  }

  ngOnInit(): void {
    const id = localStorage.getItem("id");
    if (id) {
      const userId = Number(id);
      if (!isNaN(userId)) {
        this.formMeasuresRegister.patchValue({ user_id: userId });
        console.log('User ID recuperado do localStorage e convertido para número:', userId);
      } else {
        console.log('Falha na conversão do User ID para número.');
      }
    } else {
      console.log('Nenhum User ID encontrado no localStorage.');
    }
  }

  saveMeasures() {
    if (this.formMeasuresRegister.valid) {
      const measures: Measures = this.formMeasuresRegister.value;
      this.createMeasuresService.createMeasure(measures).subscribe(
        resposta => {
          alert("Medidas salvas");
          this.router.navigate(['home']);
        },
        error => {
          console.log("Deu erro", error);
        }
      );
    } else {
      console.log("Formulário inválido");
    }
  }

  cancel() {
    this.router.navigate(['home']);
  }
}
