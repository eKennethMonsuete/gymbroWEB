import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserUpdateService {

  private API : String = environment.URL;

  constructor(private http : HttpClient) { }


  updateUser(id : number, user : User): Observable<any>{
    const url = `${this.API}/user/${id}`;
    console.log('Update URL:', url);
    return this.http.put<any>(url, user, { responseType: 'text' as 'json' })
  }


  findUserById(id: number): Observable<any>{
    const url = `${this.API}/user/${id}`
    return this.http.get<any>(url)

  }
}
