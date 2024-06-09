import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserUpdateService } from './user-update.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { onlyLettersValidator } from 'src/app/validators/lettersValidator';
import { onlyNumbersValidator } from 'src/app/validators/numberValidator';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  formUserUpdate!: FormGroup;
  user: User = {
    id: 0,
    name: "",
    surname: "",
    email: "",
    whatsapp: "",
    password: "",
    secondPassword: ""
  };

  constructor(
    private userUpdateService: UserUpdateService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formUserUpdate = new FormGroup({
      name: new FormControl('', [Validators.required, onlyLettersValidator()]),
      surname: new FormControl('', [onlyLettersValidator()]),
      email: new FormControl('', [Validators.required, Validators.email]),
      whatsapp: new FormControl('', [Validators.required, onlyNumbersValidator()]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      secondPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString) {
      const id = parseInt(idString, 10);
      if (!isNaN(id)) {
        this.user.id = id;
        this.userUpdateService.findUserById(id).subscribe(
          user => {
            this.formUserUpdate.patchValue({
              name: user.name,
              surname: user.surname,
              email: user.email,
              whatsapp: user.whatsapp
              // Não preenchemos os campos de senha para segurança
            });
            console.log('User data loaded:', user);
          },
          error => {
            console.error('Error fetching user data:', error);
          }
        );
      } else {
        console.error('Invalid user ID:', idString);
      }
    } else {
      console.error('User ID is not found in route');
    }
  }

  updateUser(): void {
    if (this.formUserUpdate.valid) {
      const updatedUser: User = {
        ...this.user,
        ...this.formUserUpdate.value
      };

      if (updatedUser.password === updatedUser.secondPassword) {
        this.userUpdateService.updateUser(this.user.id, updatedUser).subscribe(
          response => {
            console.log('User updated successfully');
            alert("Atualização realizada com sucesso!");
            this.router.navigate(['home']);
          },
          error => {
            console.error('Error updating user:', error);
          }
        );
      } else {
        console.error('Passwords do not match');
      }
    } else {
      console.error('Form is invalid');
    }
  }

  cancel(): void {
    this.router.navigate(['home']);
  }
}
