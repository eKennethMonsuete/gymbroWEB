import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class ListMeasuresService {

  private API : String = environment.URL;

  constructor(private http : HttpClient) { }

  getMyMeasures(id : number): Observable<any> {

    const url = `${this.API}/user/${id}`
    return this.http.get<any>(url)

  }
}
