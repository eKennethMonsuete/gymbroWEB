
import { Component, OnInit } from '@angular/core';
import { Workout } from './Workout';
import { ActivatedRoute,  Router } from '@angular/router';
import { WorkoutUpdateService } from './workout-update.service';

@Component({
  selector: 'app-workout-update',
  templateUrl: './workout-update.component.html',
  styleUrls: ['./workout-update.component.css']
})
export class WorkoutUpdateComponent implements OnInit {

  workout : Workout = {

    id : 0,
    workout1 : "",
    workout2 : "",
    note : "",
    name : "",
    socialMedia : "" }

  constructor( private workoutUpdateService : WorkoutUpdateService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
        this.workoutUpdateService.findWorkoutById(parseInt(id!)).subscribe((workout) =>{
              this.workout = workout;
  })

}
  updateWorkout(){
    this.workoutUpdateService.updateWorkout(this.workout.id, this.workout).subscribe(
      resposta => {
        alert("treino atualizado")
        this.router.navigate(['workout']);

      }, error =>{
        console.log(error)
      })
  }

  cancel(){
    this.router.navigate(['workout']);
  }
}
