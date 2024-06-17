import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class DeleteMeasuresService {
  private API: string = environment.URL;
  private measureId: number = 0;
  private modalTriggerSource = new Subject<void>();
  modalTrigger$ = this.modalTriggerSource.asObservable();

  // Adicionar um Subject para notificar sobre a exclusão
  private measureDeletedSource = new Subject<void>();
  measureDeleted$ = this.measureDeletedSource.asObservable();

  constructor(private http: HttpClient) { }

  setMeasureId(id: number): void {
    this.measureId = id;
  }

  getMeasureId(): number {
    return this.measureId;
  }

  deleteMeasure(measureId: number): Observable<any> {
    const url = `${this.API}/measures/${measureId}`;
    return this.http.delete<any>(url, { responseType: 'text' as 'json' });
  }

  triggerModal(): void {
    this.modalTriggerSource.next();
  }

  // Método para notificar sobre a exclusão
  notifyMeasureDeleted(): void {
    this.measureDeletedSource.next();
  }
}
