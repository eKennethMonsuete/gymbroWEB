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

const routes: Routes = [

  {path:"", component : LoginComponent},
  {path:"home", component : HomeComponent},
  {path:"createmeasures", component : CreateMeasuresComponent, canActivate: [authGuard]},
  {path:"createuser", component : UserCreateComponent},
  {path:"creatework", component : CreateWorkoutComponent, canActivate: [authGuard]},
  {path: "workout", component: WorkoutListComponent},
  {path: "delete-measures/:id", component: DeleteMeasuresComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
