import { Workout } from './Workout';
import { WorkoutListService } from './workout-list.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {

  workoutList : Workout[] = [];

  constructor( private workoutListService : WorkoutListService) { }

  ngOnInit(): void {
    this.workoutListService.WorkoutList().subscribe((workoutList) =>
    {this.workoutList = workoutList})
  }

}
