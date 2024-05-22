import { Injectable } from '@angular/core';
import { Workout } from './Workout';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class CreateWorkoutService {

  private API : string = environment.URL;

  constructor( private http : HttpClient) { }


saveWorkout(workout : Workout): Observable<any>{
  return this.http.post<any>(`${this.API}/workout`, workout, { responseType: 'text' as 'json' })

}

}
