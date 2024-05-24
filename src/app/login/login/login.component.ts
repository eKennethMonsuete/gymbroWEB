
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';


interface User{

  email: string;
  password: string;
  name?: string;

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser : User = {email: "", password: "", name: ""}

  constructor( private LoginService : LoginService,
    private route : Router
  ) { }

  ngOnInit(): void {
  }

  submit(){
    this.LoginService.login(this.loginUser.email, this.loginUser.password).subscribe(
      resposta =>{
        alert("deu certo")
        console.log(resposta)
        this.route.navigate(["/home"])


      }, error => {
        console.log(error)
      }
    )



  }

}
