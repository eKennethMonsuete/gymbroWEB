import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutDeleteService } from './workout-delete.service';
import { Workout } from './Workout';
declare var bootstrap: any;

@Component({
  selector: 'app-workout-delete',
  templateUrl: './workout-delete.component.html',
  styleUrls: ['./workout-delete.component.css']
})
export class WorkoutDeleteComponent implements OnInit {

  workout : Workout = {
    id : 0,
    workout1 : "",
    workout2 : "",
    note : "",
    name : "",
    socialMedia : "" }

  constructor(private workoutDeleteService : WorkoutDeleteService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
        this.workoutDeleteService.findWorkoutById(parseInt(id!)).subscribe((workout) =>{
              this.workout = workout;
  })
  this.openModal();
  }

  openModal(): void {
    const modalElement = document.getElementById('deleteWorkoutModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  deleteWorkout(){
    if(this.workout.id){
      this.workoutDeleteService.deleteWorkout(this.workout.id).subscribe(() =>
      {alert("treino excluido")
        this.router.navigate(["workout"])
      }, error =>{
        console.log(error)
      })
    }
  }

  cancel(){
    this.router.navigate(['workout']);
  }

}
