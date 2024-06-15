import { ListExclusiveWorkoutService } from './list-exclusive-workout.service';
import { Component, OnInit } from '@angular/core';
import { ExclusiveWorkout } from './exclusiveWorkout';
import { ActivatedRoute } from '@angular/router';
import { UserUpdateService } from 'src/app/user/user-update/user-update.service';
import { User } from './user';

@Component({
  selector: 'app-list-exclusive-workout',
  templateUrl: './list-exclusive-workout.component.html',
  styleUrls: ['./list-exclusive-workout.component.css']
})
export class ListExclusiveWorkoutComponent implements OnInit {

  exclusiveWorkout : ExclusiveWorkout[] = [];
  idUser: number | null = null;

  user : User = {
    name : '',
    surname : '',
    email : '',
    whatsapp : '',
    password : '',
    secondPassword : '',
  }

  constructor(private listExclusiveWorkoutService : ListExclusiveWorkoutService,
    private route: ActivatedRoute,
    private userService : UserUpdateService
  ) { }

  ngOnInit(): void {
    this.getID();



    console.log(this.idUser);

  }



  getMyWorkouts(){

  }

  getID(){
    //Obtém o ID do localStorage
    const idString = localStorage.getItem('id');
    const id = idString !== null ? +idString : NaN;
    this.idUser = id;

    if (isNaN(id)) {
      // Lidar com erro se o ID não for um número válido
      console.error('ID inválido:', id);
      return;}

    this.listExclusiveWorkoutService.getMyWorkout(id).subscribe( resposta =>  {
     // this.name = resposta.name;
     // this.user.whatsapp = resposta.whatsapp;

      this.exclusiveWorkout = resposta.exclusiveWorkoutDTOs;
      console.log('MyWorkouts loaded:', this.exclusiveWorkout);

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


}
