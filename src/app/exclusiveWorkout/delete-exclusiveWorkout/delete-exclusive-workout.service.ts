import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class DeleteExclusiveWorkoutService {
  private API: string = environment.URL;

  // Subject para notificar sobre a exclusão
  private workoutDeletedSource = new Subject<void>();
  workoutDeleted$ = this.workoutDeletedSource.asObservable();

  constructor(private http: HttpClient) { }

  findMyworkoutID(id: number): Observable<any> {
    const url = `${this.API}/exclusiveworkout/${id}`;
    return this.http.get<any>(url);
  }

  deleteMyWorkout(id: number): Observable<any> {
    const url = `${this.API}/exclusiveworkout/${id}`;
    return this.http.delete<any>(url, { responseType: 'text' as 'json' });
  }

  // Método para notificar sobre a exclusão
  notifyWorkoutDeleted(): void {
    this.workoutDeletedSource.next();
  }
}
