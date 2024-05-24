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

  constructor( private loginService: LoginService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  deslogar(){
    this.loginService.logout();
    console.log("é para ter excluíto o token do local storage")
    this.router.navigate([''])
  }

}
