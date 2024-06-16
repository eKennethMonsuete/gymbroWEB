
import { Component, OnInit } from '@angular/core';
import { Workout } from './Workout';
import { ActivatedRoute,  Router } from '@angular/router';
import { WorkoutUpdateService } from './workout-update.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-workout-update',
  templateUrl: './workout-update.component.html',
  styleUrls: ['./workout-update.component.css']
})
export class WorkoutUpdateComponent implements OnInit {

  formWorkoutRegister! : FormGroup;

  charCount = 0;
  charCount2 = 0;
  charCount3 = 0;

  constructor( private workoutUpdateService : WorkoutUpdateService,
    private route : ActivatedRoute,
    private router : Router
  ) {
    this.formWorkoutRegister = new FormGroup({
      id : new FormControl(),
      workout1 : new FormControl('', [Validators.maxLength(255)]),
      workout2 : new FormControl('', [Validators.maxLength(255)]),
      note : new FormControl('', [Validators.maxLength(255)]),
      name : new FormControl('', [Validators.required]),
      workoutName : new FormControl('', [Validators.required]),
      socialMedia : new FormControl('', [Validators.required])
    })
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.workoutUpdateService.findWorkoutById(parseInt(id)).subscribe((workout: Workout) => {
        this.formWorkoutRegister.patchValue(workout);
      });
    }




}
  updateWorkout(){
    if(this.formWorkoutRegister.valid){
      const formValues = this.formWorkoutRegister.value
      const workout : Workout = {
        id: formValues.id,
        workout1: formValues.workout1,
        workout2: formValues.workout2,
        note : formValues.note,
        name : formValues.name,
        workoutName : formValues.workoutName,
        socialMedia : formValues.socialMedia
      }

      this.workoutUpdateService.updateWorkout(workout.id, workout).subscribe(
      resposta => {

        this.router.navigate(['workout']);

      }, error =>{
        console.log(error)
      })

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
