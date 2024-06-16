import { ExclusiveWorkout } from './../list-exclusiveWorkout/exclusiveWorkout';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class CreateExclusiveWorkoutService {

  private API : String = environment.URL;

  constructor( private http : HttpClient) { }


  createMyWorkout(exclusiveWorkout : ExclusiveWorkout):Observable<any>{
    const url = `${this.API}/exclusiveworkout/savework/${exclusiveWorkout.user_id}`
    return this.http.post<any>(url, exclusiveWorkout, { responseType: 'text' as 'json' })
  }
}
