import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { ExclusiveWorkout } from '../create-exclusiveWorkout/exclusiveWorkout';

@Injectable({
  providedIn: 'root'
})
export class UpdateExclusiveWorkoutService {

  private API : String = environment.URL;

  constructor(private http : HttpClient) { }


  findMyworkoutID(id : number){
      const url = `${this.API}/exclusiveworkout/${id}`
      return this.http.get<any>(url)
  }

  updateMyWorkout(id: number, exclusiveWorkout : ExclusiveWorkout){
    const url = `${this.API}/exclusiveworkout/${id}`
    return this.http.put<any>(url, exclusiveWorkout, { responseType: 'text' as 'json' } )

  }

}
