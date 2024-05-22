import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { MeasuresComponent } from './measures/measures/measures.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { WorkoutComponent } from './workout/workout.component';
import { CreateWorkoutComponent } from './workout/create-workout/create-workout/create-workout.component';

const routes: Routes = [

  {path:"", component : LoginComponent},
  {path:"measures", component : MeasuresComponent},
  {path:"createuser", component : UserCreateComponent},
  {path:"creatework", component : CreateWorkoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
