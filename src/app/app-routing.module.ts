import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { MeasuresComponent } from './measures/list-measures/measures.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { WorkoutComponent } from './workout/workout.component';
import { CreateWorkoutComponent } from './workout/create-workout/create-workout.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home/home.component';
import { CreateMeasuresComponent } from './measures/create-measures/create-measures.component';

const routes: Routes = [

  {path:"", component : LoginComponent},
  {path:"home", component : HomeComponent, canActivate: [authGuard]},
  {path:"createmeasures", component : CreateMeasuresComponent, canActivate: [authGuard]},
  {path:"createuser", component : UserCreateComponent},
  {path:"creatework", component : CreateWorkoutComponent, canActivate: [authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
