
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
  loginUser: User = { email: "", password: "", name: "" };
  loginError: boolean = false; // Variável para controlar a mensagem de erro
  emptyFieldsError: boolean = false; // Variável para controlar o erro de campos vazios

  constructor(private LoginService: LoginService, private route: Router) { }

  ngOnInit(): void { }

  submit() {
    // Verificação de campos vazios
    if (!this.loginUser.email || !this.loginUser.password) {
      this.emptyFieldsError = true;
      this.loginError = false;
      return;
    }

    this.LoginService.login(this.loginUser.email, this.loginUser.password).subscribe(
      resposta => {

        console.log(resposta);
        this.loginError = false;
        this.emptyFieldsError = false;
        this.route.navigate(["/home"]);
      },
      error => {
        console.log(error);
        this.loginError = true;
        this.emptyFieldsError = false;
      }
    );
  }
}
