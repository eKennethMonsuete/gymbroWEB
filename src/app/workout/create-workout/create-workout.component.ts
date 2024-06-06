
import { Component, OnInit } from '@angular/core';

import { CreateWorkoutService } from './create-workout.service';
import { Workout } from './Workout';
import { Router } from '@angular/router';
import {  FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css']
})
export class CreateWorkoutComponent implements OnInit {



  formWorkoutRegister! : FormGroup;

  charCount = 0;
  charCount2 = 0;
  charCount3 = 0;

  constructor(private serviceCreateWorkout : CreateWorkoutService,
    private router : Router
  ) {

    this.formWorkoutRegister = new FormGroup({
      workout1 : new FormControl('', [Validators.maxLength(255)]),
      workout2 : new FormControl('', [Validators.maxLength(255)]),
      note : new FormControl('', [Validators.maxLength(255)]),
      name : new FormControl('', [Validators.required]),
      workoutName : new FormControl('', [Validators.required]),
      socialMedia : new FormControl('', [Validators.required])
    })


   }

  ngOnInit(): void {
  }

  sendWorkout(){
    if(this.formWorkoutRegister.valid){
      const formValues = this.formWorkoutRegister.value
      const workout : Workout = {

        workout1: formValues.workout1,
        workout2: formValues.workout2,
        note : formValues.note,
        name : formValues.name,
        workoutName : formValues.workoutName,
        socialMedia : formValues.socialMedia

      }

        this.serviceCreateWorkout.saveWorkout(workout).subscribe(
      resposta => {
        console.log(workout)
        alert('treinos foram salvos')
        this.router.navigate(['workout']);
      }, error => {
        console.error(error)
      }
    )
    }else {
      console.log("formulário inválido")
    }



  }

  cancel(){
    this.router.navigate(['workout']);
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






}
