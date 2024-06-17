import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteExclusiveWorkoutService } from './delete-exclusive-workout.service';
import * as bootstrap from 'bootstrap'


@Component({
  selector: 'app-delete-exclusive-workout',
  templateUrl: './delete-exclusive-workout.component.html',
  styleUrls: ['./delete-exclusive-workout.component.css']
})
export class DeleteExclusiveWorkoutComponent implements OnInit {
  myWorkoutID: number = 0;

  @ViewChild('deleteModal') deleteModal: ElementRef | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private deleteExclusiveWorkoutService: DeleteExclusiveWorkoutService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.myWorkoutID = id !== null ? +id : 0;

    if (!this.myWorkoutID) {
      this.router.navigate(['myworkout']);
    }
  }

  confirmDelete(): void {
    if (this.myWorkoutID) {
      this.deleteExclusiveWorkoutService.deleteMyWorkout(this.myWorkoutID).subscribe(
        response => {
          this.deleteExclusiveWorkoutService.notifyWorkoutDeleted();
          this.closeModal();
          this.router.navigate(['myworkout']);
        },
        error => {
          console.error('Erro ao excluir treino', error);
        }
      );
    }
  }

  cancel(): void {
    this.router.navigate(['myworkout']);
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
