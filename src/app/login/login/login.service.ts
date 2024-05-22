import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { LoginResponse } from 'src/app/types/login-response.type';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API : String = environment.URL;

  constructor( private http : HttpClient) { }

  login(email : string, password: string){
    return this.http.post<LoginResponse>(`${this.API}/auth/login`, {email, password}).pipe(
     tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.name)
      })
    )

  }
}
