import { Injectable } from '@angular/core';
import { Measures } from './measures';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateMeasuresService {

  private API : String = environment.URL;

  constructor( private http : HttpClient) { }


  createMeasure(measure : Measures):Observable<any>{
    const url = `${this.API}/measures/save/${measure.user_id}`
    return this.http.post<any>(url, measure, { responseType: 'text' as 'json' })

  }
}
