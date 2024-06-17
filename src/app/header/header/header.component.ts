import { Router } from '@angular/router';
import { LoginService } from './../../login/login/login.service';
import { TokenService } from './../../token/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor( private loginService: LoginService,
    private router : Router
  ) { }

  ngOnInit(): void {

    this.isLoggedIn = this.loginService.estaLogado();
    this.loginService.getLoggedInStatus().subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  deslogar(){
    this.loginService.logout();
    console.log("é para ter excluíto o token do local storage e do session")
    this.router.navigate([''])
    this.isLoggedIn = false;
  }

}
