import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';

import { UserCreateComponent } from './user/user-create/user-create.component';

import { CreateWorkoutComponent } from './workout/create-workout/create-workout.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home/home.component';
import { CreateMeasuresComponent } from './measures/create-measures/create-measures.component';
import { WorkoutListComponent } from './workout/workout-list/workout-list.component';
import { DeleteMeasuresComponent } from './measures/delete-measures/delete-measures.component';
import { UpdateMeasuresComponent } from './measures/update-measures/update-measures.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { WorkoutUpdateComponent } from './workout/workout-update/workout-update.component';
import { WorkoutDeleteComponent } from './workout/workout-delete/workout-delete.component';
import { ListExclusiveWorkoutComponent } from './exclusiveWorkout/list-exclusiveWorkout/list-exclusive-workout.component';

const routes: Routes = [

  {path:"", component : LoginComponent},
  {path:"home", component : HomeComponent, canActivate: [authGuard]},
  {path:"createmeasures", component : CreateMeasuresComponent, canActivate: [authGuard]},
  {path:"createuser", component : UserCreateComponent},
  {path:"creatework", component : CreateWorkoutComponent, canActivate: [authGuard]},
  {path: "workout", component: WorkoutListComponent, canActivate: [authGuard]},
  {path: "delete-measures/:id", component: DeleteMeasuresComponent, canActivate: [authGuard]},
  {path: "updatemeasure/:id", component: UpdateMeasuresComponent, canActivate: [authGuard]},
  {path: "updateuser/:id", component: UserUpdateComponent, canActivate: [authGuard]},
  {path: "updateworkout/:id", component: WorkoutUpdateComponent, canActivate: [authGuard]},
  {path: "deleteworkout/:id", component: WorkoutDeleteComponent, canActivate: [authGuard]},
  {path:"myworkout", component : ListExclusiveWorkoutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
