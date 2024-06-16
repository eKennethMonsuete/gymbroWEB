import { DeleteExclusiveWorkoutService } from './delete-exclusive-workout.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-exclusive-workout',
  templateUrl: './delete-exclusive-workout.component.html',
  styleUrls: ['./delete-exclusive-workout.component.css']
})
export class DeleteExclusiveWorkoutComponent implements OnInit {

  myWorkoutID: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private deleteExclusiveWorkoutService: DeleteExclusiveWorkoutService // Atualize o nome do serviço conforme necessário
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
          alert('Treino excluído com sucesso');
          this.router.navigate(['myworkout']);
        }, error => {
          console.error('Erro ao excluir treino', error);
        }
      );
    }
  }

  cancel(): void {
    this.router.navigate(['myworkout']);
  }
}
