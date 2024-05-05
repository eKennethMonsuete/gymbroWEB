import { UserCreateService } from './user-create.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  User : User[]=[];
  saveUserDTO : User = {name :"", surname:"", email:"", whatsapp:"",  password:"", secondPassword:""}

  constructor(private UserCreateService : UserCreateService,
              private router : Router
  ) { }

  ngOnInit(): void {
  }

  registerUser(){
    if(this.saveUserDTO.password === this.saveUserDTO.secondPassword){
      this.UserCreateService.saveUser({
      name : this.saveUserDTO.name,
      surname : this.saveUserDTO.surname,
      email : this.saveUserDTO.email,
      whatsapp : this.saveUserDTO.whatsapp,
      password : this.saveUserDTO.password
    }).subscribe(resposta =>
      {alert("user cadastrado com sucesso")


      },
      error =>{
        console.error('Erro ao cadastrar usuário: MSG DO ANGULAR', error);
      }
    )
  }
    }


}
