import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserUpdateService } from './user-update.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user : User = {
    id: 0,
    name : "",
    surname : "",
    email : "",
    whatsapp : "",
    password :"",
    secondPassword : ""


  }

  constructor(
    private userUpdateService : UserUpdateService,
    private route: ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString) {
      const id = parseInt(idString, 10);
      if (!isNaN(id)) {
        this.user.id = id;
        this.userUpdateService.findUserById(id).subscribe(
          user => {
            // Atualizar apenas os campos relevantes
            this.user.name = user.name;
            this.user.surname = user.surname;
            this.user.email = user.email;
            this.user.whatsapp = user.whatsapp;
            // Atualizar outros campos se necessário
            console.log('User data loaded:', this.user);
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

  updateUser(){
    console.log('User ID to update:', this.user.id);
    if (this.user.password === this.user.secondPassword) {
      this.userUpdateService.updateUser(this.user.id , this.user).subscribe(
        response => {
          console.log('metodo', this.user.id);
          console.log('User updated successfully');
          alert("deu  certo finalkmente")
          this.router.navigate(['home']);
        },
        error => {
          console.error('Error updating user:', error);
        }
      );
    } else {
      console.error('Passwords do not match');
    }
  }

  cancel(){
    this.router.navigate(['home']);
  }

}
