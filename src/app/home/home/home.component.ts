import { DeleteMeasuresService } from './../../measures/delete-measures/delete-measures.service';

import { ActivatedRoute, Router } from '@angular/router';
import { ListMeasuresService } from './../../measures/list-measures/list-measures.service';
import { WorkoutListService } from './../../workout/workout-list/workout-list.service';
import { Component, OnInit } from '@angular/core';
import { Measures } from './Measures';
import { User } from './user';
import { UserUpdateService } from 'src/app/user/user-update/user-update.service';
import { LoginService } from 'src/app/login/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  idUser: number | null = null;
  name: string = "";

  measures: Measures[] = [];

  user : User = {

    name : '',
    surname : '',
    email : '',
    whatsapp : '',
    password : '',
    secondPassword : '',
  }



  constructor(private listMeasuresService : ListMeasuresService,
    private route: ActivatedRoute,
    private userService : UserUpdateService,
    private deleteMeasuresService : DeleteMeasuresService,
    private loginService: LoginService,
    private router : Router


  ) { }

  ngOnInit(): void {
    this.getMeasureID();
    this.getUserId();

    console.log(this.idUser);
    console.log(this.measures);
    console.log("user aqui objeto", this.user)




  }

  getMeasureID(){
    //Obtém o ID do localStorage
    const idString = localStorage.getItem('id');
    const id = idString !== null ? +idString : NaN;
    this.idUser = id;

    if (isNaN(id)) {
      // Lidar com erro se o ID não for um número válido
      console.error('ID inválido:', id);
      return;}

    this.listMeasuresService.getMyMeasures(id).subscribe( resposta =>  {
      this.name = resposta.name;
      this.user.whatsapp = resposta.whatsapp;

      this.measures = resposta.measures;
      console.log('Measures loaded:', this.measures);
      console.log("whats", this.user.whatsapp)
    }, error => {
      console.error('Erro :', error);
    });

  }


  getUserId(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.findUserById(parseInt(id)).subscribe(user => {
        this.user = user;
      });
    }
  }

  openDeleteModal(measureId : number): void {
    this.deleteMeasuresService.setMeasureId(measureId);
    this.deleteMeasuresService.triggerModal();
  }

  getUserData(){}




  }


