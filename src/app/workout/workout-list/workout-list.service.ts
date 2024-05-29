import { Workout } from './../create-workout/Workout';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class WorkoutListService {

  private API : string = environment.URL;

  constructor(private http : HttpClient) { }


  WorkoutList(): Observable<any>{
    return this.http.get<any>(`${this.API}/workout`)

  }

}
