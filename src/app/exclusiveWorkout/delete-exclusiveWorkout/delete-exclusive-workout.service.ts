import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class DeleteExclusiveWorkoutService {

  private API : String = environment.URL;

  constructor(private http : HttpClient) { }


  findMyworkoutID(id : number){
    const url = `${this.API}/exclusiveworkout/${id}`
    return this.http.get<any>(url)
    }

  deleteMyWorkout(id : number){
      const url = `${this.API}/exclusiveworkout/${id}`;
      return this.http.delete<any>(url, { responseType: 'text' as 'json' })

    }


}
