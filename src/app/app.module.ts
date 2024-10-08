import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { MeasuresComponent } from './measures/list-measures/measures.component';
import { HeaderComponent } from './header/header/header.component';
import { UserComponent } from './user/user/user.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';

import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login/login/login.service';
import { CreateWorkoutComponent } from './workout/create-workout/create-workout.component';
import { TokenInterceptorService } from './token/token-interceptor.service';
import { HomeComponent } from './home/home/home.component';
import { WorkoutListComponent } from './workout/workout-list/workout-list.component';
import { CreateMeasuresComponent } from './measures/create-measures/create-measures.component';
import { WorkoutListService } from './workout/workout-list/workout-list.service';
import { DeleteMeasuresComponent } from './measures/delete-measures/delete-measures.component';
import { UpdateMeasuresComponent } from './measures/update-measures/update-measures.component';
import { WorkoutDeleteComponent } from './workout/workout-delete/workout-delete.component';
import { WorkoutUpdateComponent } from './workout/workout-update/workout-update.component';

import { CommonModule } from '@angular/common';
import { UpdateExclusiveWorkoutComponent } from './exclusiveWorkout/update-exclusiveWorkout/update-exclusive-workout.component';
import { ListExclusiveWorkoutComponent } from './exclusiveWorkout/list-exclusiveWorkout/list-exclusive-workout.component';
import { DeleteExclusiveWorkoutComponent } from './exclusiveWorkout/delete-exclusiveWorkout/delete-exclusive-workout.component';
import { CreateExclusiveWorkoutComponent } from './exclusiveWorkout/create-exclusiveWorkout/create-exclusive-workout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MeasuresComponent,
    HeaderComponent,
    UserComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    CreateWorkoutComponent,
    HomeComponent,
    WorkoutListComponent,
    CreateMeasuresComponent,
    DeleteMeasuresComponent,
    UpdateMeasuresComponent,
    WorkoutDeleteComponent,
    WorkoutUpdateComponent,
    ListExclusiveWorkoutComponent,
    CreateExclusiveWorkoutComponent,
    DeleteExclusiveWorkoutComponent,
    ListExclusiveWorkoutComponent,
    UpdateExclusiveWorkoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule


  ],
  providers: [LoginService,
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorService, multi:true},
    WorkoutListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
