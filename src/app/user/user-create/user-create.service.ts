import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCreateService {

  private API : String = environment.URL;

  constructor(private http: HttpClient) { }


saveUser(User :
  {name : string,
  surname : string,
  email : string,
  whatsapp : string,
  password : string
  }): Observable<any>{
    return this.http.post(`${this.API}/auth/register`, User, { responseType: 'text' as 'json' });
  }

}
