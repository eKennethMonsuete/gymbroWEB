import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DeleteMeasuresService } from './delete-measures.service';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-delete-measures',
  templateUrl: './delete-measures.component.html'
})
export class DeleteMeasuresComponent implements OnInit {
  measureId: number = 0;
  @ViewChild('deleteMeasureModal') modalElement!: ElementRef;
  private modal!: Modal;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private deleteMeasuresService: DeleteMeasuresService) { }

  ngOnInit(): void {
    this.deleteMeasuresService.modalTrigger$.subscribe(() => {
      this.measureId = this.deleteMeasuresService.getMeasureId();
      this.openModal();
    });
  }

  openModal(): void {
    if (this.modalElement) {
      this.modal = new Modal(this.modalElement.nativeElement);
      this.modal.show();
    }
  }

  delete(): void {
    if (this.measureId !== 0) {
      this.deleteMeasuresService.deleteMeasure(this.measureId).subscribe(response => {
        console.log('Medida excluída com sucesso:', response);
        this.modal.hide();
        this.router.navigate(['home']);
      }, error => {
        console.error('Erro ao excluir a medida:', error);
      });
    } else {
      console.error('ID da medida é inválido');
    }
  }

  cancel(): void {
    this.modal.hide();
    this.router.navigate(['home']);
  }
}
