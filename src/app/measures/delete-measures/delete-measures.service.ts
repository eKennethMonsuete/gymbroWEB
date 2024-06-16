import { Measures } from './../create-measures/measures';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class DeleteMeasuresService {

  private API : string = environment.URL;

  private measureId: number = 0;

  private modalTriggerSource = new Subject<void>();
  modalTrigger$ = this.modalTriggerSource.asObservable();

  constructor(private http: HttpClient) { }

  setMeasureId(id: number): void {
    this.measureId = id;
  }

  getMeasureId(): number {
    return this.measureId;
  }

  deleteMeasure(measureId : number): Observable<any>{
    const url = `${this.API}/measures/${measureId}`;
    return this.http.delete<any>(url, { responseType: 'text' as 'json' })
  }


  findMeasureById(id: number){
    const url = `${this.API}/user/${id}`
    return this.http.get<any>(url)
  }



  triggerModal(): void {
    this.modalTriggerSource.next();
  }

}
