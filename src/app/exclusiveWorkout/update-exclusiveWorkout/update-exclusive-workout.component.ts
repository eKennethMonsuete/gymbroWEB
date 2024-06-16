import { UpdateExclusiveWorkoutService } from './update-exclusive-workout.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExclusiveWorkout } from '../create-exclusiveWorkout/exclusiveWorkout';

@Component({
  selector: 'app-update-exclusive-workout',
  templateUrl: './update-exclusive-workout.component.html',
  styleUrls: ['./update-exclusive-workout.component.css']
})
export class UpdateExclusiveWorkoutComponent implements OnInit {

  formMyWorkoutUpdate!: FormGroup;
  myWorkoutID : number = 0;

  charCount = 0;
  charCount2 = 0;
  charCount3 = 0;
  charCount4 = 0;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
  private updateExclusiveWorkoutService : UpdateExclusiveWorkoutService) {

    this.formMyWorkoutUpdate = this.formBuilder.group({
      nome : new FormControl('', [Validators.required]),
      descricao : new FormControl('', [Validators.required, Validators.maxLength(255)]),
      objetivo : new FormControl('', [Validators.required]),
      workout1 : new FormControl('', [Validators.required, Validators.maxLength(255)]),
      workout2: new FormControl('', [Validators.maxLength(255)]),
      workout3: new FormControl('', [Validators.maxLength(255)]),
      autor : new FormControl('', [Validators.required])
     });
   }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.myWorkoutID = id !== null ? +id : 0;

    if(this.myWorkoutID){
      this.updateExclusiveWorkoutService.findMyworkoutID(this.myWorkoutID).subscribe(
        (myworkout: ExclusiveWorkout) =>
      {
        if(myworkout){
          this.formMyWorkoutUpdate.patchValue(myworkout);
        }
      });
    }
    console.log(id)


  }

  updateMyWorkout(){
    if(this.formMyWorkoutUpdate.valid){
      const updatedMyWorkout : ExclusiveWorkout = {
        ...this.formMyWorkoutUpdate.value,
        id : this.myWorkoutID
      };
      this.updateExclusiveWorkoutService.updateMyWorkout(this.myWorkoutID, updatedMyWorkout).subscribe(
        response => {
          alert('deu certo');
          this.router.navigate(['myworkout']);
        }, error =>{
          console.log(error)
        }
      )
    }else {
      console.error('formulario invalido')
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
