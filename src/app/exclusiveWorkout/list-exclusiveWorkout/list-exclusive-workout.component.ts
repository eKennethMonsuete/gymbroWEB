import { DeleteExclusiveWorkoutService } from './../delete-exclusiveWorkout/delete-exclusive-workout.service';
import { ListExclusiveWorkoutService } from './list-exclusive-workout.service';
import { Component, OnInit } from '@angular/core';
import { ExclusiveWorkout } from './exclusiveWorkout';
import { ActivatedRoute, Router } from '@angular/router';
import { UserUpdateService } from 'src/app/user/user-update/user-update.service';
import { User } from './user';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-list-exclusive-workout',
  templateUrl: './list-exclusive-workout.component.html',
  styleUrls: ['./list-exclusive-workout.component.css']
})
export class ListExclusiveWorkoutComponent implements OnInit {

  exclusiveWorkout : ExclusiveWorkout[] = [];
  idUser: number | null = null;
  workoutToDeleteId: number | null = null;

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
    private userService : UserUpdateService,
    private router: Router,
    private deleteService : DeleteExclusiveWorkoutService

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

  openDeleteModal(id: number): void {
    this.workoutToDeleteId = id;
    const deleteModal = new bootstrap.Modal(document.getElementById('deleteModal') as HTMLElement);
    deleteModal.show();
  }


  deleteWorkout(): void {
    if (this.workoutToDeleteId !== null) {
      this.deleteService.deleteMyWorkout(this.workoutToDeleteId).subscribe(
        response => {
          this.exclusiveWorkout = this.exclusiveWorkout.filter(workout => workout.id !== this.workoutToDeleteId);
          const deleteModalElement = document.getElementById('deleteModal');
          if (deleteModalElement) {
            const deleteModal = bootstrap.Modal.getInstance(deleteModalElement);
            if (deleteModal) {
              deleteModal.hide();
            }
          }
        },
        error => {
          console.error('Erro ao deletar treino:', error);
        }
      );
    }
  }
  }





