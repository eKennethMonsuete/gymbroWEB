import { TokenService } from './../../token/token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginResponse } from 'src/app/types/login-response.type';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API : String = environment.URL;

  private loggedIn = new BehaviorSubject<boolean>(this.estaLogado());

  constructor( private http : HttpClient,
    private tokenService : TokenService
  ) { }

  login(email : string, password: string){
    return this.http.post<LoginResponse>(`${this.API}/auth/login`, {email, password}).pipe(
     tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.name)
        sessionStorage.setItem("id", value.id.toString())
        localStorage.setItem("id", value.id.toString())

        this.tokenService.salvarToken(value.token)
        this.loggedIn.next(true);
      })
    )
  }

  logout(){
    //this.tokenService.excluirToken();
    localStorage.clear();
    sessionStorage.clear();

  }

  estaLogado(){
   return this.tokenService.possuiToken();
  }

  getLoggedInStatus(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }


}
