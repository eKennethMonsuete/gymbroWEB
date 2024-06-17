import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListExclusiveWorkoutService } from './list-exclusive-workout.service';
import { DeleteExclusiveWorkoutService } from './../delete-exclusiveWorkout/delete-exclusive-workout.service';
import { UserUpdateService } from 'src/app/user/user-update/user-update.service';
import { ExclusiveWorkout } from './exclusiveWorkout';
import { User } from './user';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-list-exclusive-workout',
  templateUrl: './list-exclusive-workout.component.html',
  styleUrls: ['./list-exclusive-workout.component.css']
})
export class ListExclusiveWorkoutComponent implements OnInit {
  exclusiveWorkout: ExclusiveWorkout[] = [];
  idUser: number | null = null;
  workoutToDeleteId: number | null = null;

  @ViewChild('deleteModal') deleteModal: ElementRef | undefined;

  user: User = {
    name: '',
    surname: '',
    email: '',
    whatsapp: '',
    password: '',
    secondPassword: '',
  }

  constructor(
    private listExclusiveWorkoutService: ListExclusiveWorkoutService,
    private route: ActivatedRoute,
    private userService: UserUpdateService,
    private router: Router,
    private deleteService: DeleteExclusiveWorkoutService
  ) { }

  ngOnInit(): void {
    this.getID();
    this.deleteService.workoutDeleted$.subscribe(() => {
      this.getMyWorkouts();
    });
  }

  getID(): void {
    const idString = localStorage.getItem('id');
    const id = idString !== null ? +idString : NaN;
    this.idUser = id;

    if (isNaN(id)) {
      console.error('ID inválido:', id);
      return;
    }

    this.getMyWorkouts();
  }

  getMyWorkouts(): void {
    if (this.idUser !== null) {
      this.listExclusiveWorkoutService.getMyWorkout(this.idUser).subscribe(
        resposta => {
          this.exclusiveWorkout = resposta.exclusiveWorkoutDTOs;
          console.log('MyWorkouts loaded:', this.exclusiveWorkout);
        },
        error => {
          console.error('Erro :', error);
        }
      );
    }
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
    if (this.deleteModal) {
      const modalElement = this.deleteModal.nativeElement;
      const deleteModal = new bootstrap.Modal(modalElement);
      deleteModal.show();
    }
  }

  deleteWorkout(): void {
    if (this.workoutToDeleteId !== null) {
      this.deleteService.deleteMyWorkout(this.workoutToDeleteId).subscribe(
        response => {
          this.exclusiveWorkout = this.exclusiveWorkout.filter(workout => workout.id !== this.workoutToDeleteId);
          this.deleteService.notifyWorkoutDeleted();
          this.closeModal();
        },
        error => {
          console.error('Erro ao deletar treino:', error);
        }
      );
    }
  }

  closeModal(): void {
    if (this.deleteModal) {
      const modalElement = this.deleteModal.nativeElement;
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      }
    }
  }
}
