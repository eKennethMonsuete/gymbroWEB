import { ExclusiveWorkout } from './exclusiveWorkout';

import { CreateExclusiveWorkoutService } from './create-exclusive-workout.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-exclusive-workout',
  templateUrl: './create-exclusive-workout.component.html',
  styleUrls: ['./create-exclusive-workout.component.css']
})
export class CreateExclusiveWorkoutComponent implements OnInit {

  formMyWorkoutRegister!: FormGroup;

  charCount = 0;
  charCount2 = 0;
  charCount3 = 0;
  charCount4 = 0;

  constructor(
    private router: Router,

    private formBuilder: FormBuilder,
    private ereateExclusiveWorkoutService : CreateExclusiveWorkoutService
  ) {
    this.formMyWorkoutRegister = this.formBuilder.group({
     nome : new FormControl('', [Validators.required]),
     descricao : new FormControl('', [Validators.required, Validators.maxLength(255)]),
     objetivo : new FormControl('', [Validators.required]),
     workout1 : new FormControl('', [Validators.required, Validators.maxLength(255)]),
     workout2: new FormControl('', [Validators.maxLength(255)]),
     workout3: new FormControl('', [Validators.maxLength(255)]),
     autor : new FormControl('', [Validators.required]),
     user_id: new FormControl('')
    });
   }

  ngOnInit(): void {
    const id = localStorage.getItem("id");
    if (id) {
      const userId = Number(id);
      if (!isNaN(userId)) {
        this.formMyWorkoutRegister.patchValue({ user_id: userId });
        console.log('User ID recuperado do localStorage e convertido para número:', userId);
      } else {
        console.log('Falha na conversão do User ID para número.');
      }
    } else {
      console.log('Nenhum User ID encontrado no localStorage.');
    }
  }

  saveMyWorkout(){
    if (this.formMyWorkoutRegister.valid) {
      const exclusiveWorkout: ExclusiveWorkout = this.formMyWorkoutRegister.value;
      this.ereateExclusiveWorkoutService.createMyWorkout(exclusiveWorkout).subscribe(
        resposta => {
          alert("Meu Treino Exclusivo foi salvo");
          this.router.navigate(['myworkout']);
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
    this.router.navigate(['myworkout']);
  }

  onTextChanged(event: any) {
    this.charCount = event.target.value.length;
  }
  onTextChanged2(event: any) {
    this.charCount2 = event.target.value.length;

  }
  onTextChanged3(event: any) {
    this.charCount3 = event.target.value.length;

  }

  onTextChanged4(event: any) {
    this.charCount4 = event.target.value.length;

  }




}


