import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { Measures } from '../create-measures/measures';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateMeasuresService {

  private API : String = environment.URL;

  constructor( private http : HttpClient) { }

  updateMeasure(measureId : number, measures : Measures): Observable<Measures>{
    const url = `${this.API}/measures/${measureId}`;
    return this.http.put<any>(url, measures, { responseType: 'text' as 'json' })
  }


  findMeasureById(id: number){
    const url = `${this.API}/user/${id}`
    return this.http.get<any>(url)

  }
}
