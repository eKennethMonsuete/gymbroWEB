import { UserCreateService } from './user-create.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { onlyLettersValidator } from 'src/app/validators/lettersValidator';
import { onlyNumbersValidator } from 'src/app/validators/numberValidator';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  formUserRegister! : FormGroup;


  //User : User[]=[];
  //saveUserDTO : User = {name :"", surname:"" , email:"", whatsapp:"",  password:"", secondPassword:""}

  constructor(private UserCreateService : UserCreateService,
              private router : Router, private formBuilder : FormBuilder
  ) {

    this.formUserRegister = new FormGroup({
      name : new FormControl('', [Validators.required, onlyLettersValidator()]),
      surname : new FormControl('', [onlyLettersValidator()]),
      email : new FormControl('', [Validators.required, Validators.email]),
      whatsapp : new FormControl('', [Validators.required, onlyNumbersValidator()]),
      password : new FormControl('', [Validators.required, Validators.minLength(6)]),
      secondPassword : new FormControl('', [Validators.required, Validators.minLength(6) ])
          })
   }

  ngOnInit(): void {


    }




    registerUser(): void {
      if (this.formUserRegister.valid) {
        const formValues = this.formUserRegister.value;

        if (formValues.password === formValues.secondPassword) {
          const user: User = {
            name: formValues.name,
            surname: formValues.surname,
            email: formValues.email,
            whatsapp: formValues.whatsapp,
            password: formValues.password
          };

          this.UserCreateService.saveUser(user).subscribe(
            resposta => {
              alert("User cadastrado com sucesso");
              this.router.navigate(['']);
            },
            error => {
              console.error('Erro ao cadastrar usuário: MSG DO ANGULAR', error);
            }
          );
        } else {
          alert("As senhas não coincidem");
        }
      } else {
        console.log("Form inválido");
      }
    }

    cancel(){
      this.router.navigate(['']);
    }


}
