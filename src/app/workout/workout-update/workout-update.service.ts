import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { Workout } from './Workout';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutUpdateService {

  private API : String = environment.URL;

  constructor(private http : HttpClient) { }

  findWorkoutById(id : number){
    const url = `${this.API}/workout/${id}`
    return this.http.get<any>(url)

    }

    updateWorkout(id : number, workout : Workout): Observable<any>{
      const url = `${this.API}/workout/${id}`;
      console.log('Update URL workout:', url);
      return this.http.put<any>(url, workout, { responseType: 'text' as 'json' })
    }



}


