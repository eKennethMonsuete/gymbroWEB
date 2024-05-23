
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

  constructor( private LoginService : LoginService) { }

  ngOnInit(): void {
  }

  submit(){
    this.LoginService.login(this.loginUser.email, this.loginUser.password).subscribe(
      resposta =>{
        alert("deu certo")
        console.log(resposta)


      }, error => {
        console.log(error)
      }
    )



  }

}
