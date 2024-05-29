import { Component, OnInit } from '@angular/core';

import { CreateWorkoutService } from './create-workout.service';
import { Workout } from './Workout';


@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css']
})
export class CreateWorkoutComponent implements OnInit {

  workout : Workout = { workout1: "", workout2: "", note :""}

  constructor(private serviceCreateWorkout : CreateWorkoutService) { }

  ngOnInit(): void {
  }

  sendWorkout(){
    this.serviceCreateWorkout.saveWorkout(this.workout).subscribe(
      resposta => {
        alert('treinos foram salvos')
      }, error => {
        console.error(error)
      }
    )
  }



}
