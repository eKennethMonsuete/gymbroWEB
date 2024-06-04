import { UserCreateService } from './user-create.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  formUserRegister! : FormGroup;


  User : User[]=[];
  saveUserDTO : User = {name :"", surname:"" , email:"", whatsapp:"",  password:"", secondPassword:""}

  constructor(private UserCreateService : UserCreateService,
              private router : Router, private formBuilder : FormBuilder
  ) {

    this.formUserRegister = new FormGroup({
      name : new FormControl('', Validators.required),
      surname : new FormControl(''),
      email : new FormControl('', [Validators.required, Validators.email]),
      whatsapp : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
      secondPassword : new FormControl('', Validators.required)
          })
   }

  ngOnInit(): void {


  }

  registerUser(){

    if(this.formUserRegister.valid){

      if(this.saveUserDTO.password === this.saveUserDTO.secondPassword){
        this.UserCreateService.saveUser({
          name : this.saveUserDTO.name,
          surname : this.saveUserDTO.surname,
          email : this.saveUserDTO.email,
          whatsapp : this.saveUserDTO.whatsapp,
          password : this.saveUserDTO.password
        }).subscribe(resposta =>
          {alert("user cadastrado com sucesso")
          this.router.navigate(['']);


        },
        error =>{
          console.error('Erro ao cadastrar usuário: MSG DO ANGULAR', error);
        }
      )
    }
  }else{
    console.log("form invalido")

}
}

    cancel(){
      this.router.navigate(['']);
    }


}
