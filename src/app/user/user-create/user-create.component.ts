import { Component, OnInit } from '@angular/core';
import { User } from './user';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  User : User[]=[];
  saveUser : User = {name :"", secondName:"", email:"", whatsapp:"", password:"", secondPassword:""}

  constructor() { }

  ngOnInit(): void {
  }

}
