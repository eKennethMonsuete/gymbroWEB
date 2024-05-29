import { Measures } from './../create-measures/measures';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class DeleteMeasuresService {

  private API : string = environment.URL;

  constructor(private http: HttpClient) { }

  deleteMeasure(measureId : number): Observable<any>{
    const url = `${this.API}/measures/${measureId}`;
    return this.http.delete<any>(url)
  }


  findMeasureById(id: number){
    const url = `${this.API}/user/${id}`
    return this.http.get<any>(url)

  }
}
