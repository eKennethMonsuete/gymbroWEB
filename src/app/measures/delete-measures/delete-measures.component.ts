import { bootstrapApplication } from '@angular/platform-browser';
import { Measures } from './../list-measures/measures';

import { DeleteMeasuresService } from './delete-measures.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Modal } from 'bootstrap';


@Component({
  selector: 'app-delete-measures',
  templateUrl: './delete-measures.component.html',
  styleUrls: ['./delete-measures.component.css']
})
export class DeleteMeasuresComponent implements OnInit {

  measureId : number = 0;
  //|| null
  modal: Modal | null = null;

  constructor(private router: Router,
              private route : ActivatedRoute,
              private deleteMeasuresService : DeleteMeasuresService,
              ) { }

  ngOnInit(): void {
    this.deleteMeasuresService.modalTrigger$.subscribe(() => {
      this.measureId = this.deleteMeasuresService.getMeasureId();
      this.openModal();
    });
    console.log("measure id deve aparcer a aqui",this.measureId)

    }

    openModal(): void {
      const modalElement = document.getElementById('deleteMeasureModal');
      if (modalElement) {
        const modal = new Modal(modalElement);
        modal.show();
      }
    }





    delete(): void {
      if (this.measureId !== 0) {
        this.deleteMeasuresService.deleteMeasure(this.measureId).subscribe(response => {
          console.log('Medida excluída com sucesso:', response);
          if (this.modal) {
            this.modal.hide();
            this.router.navigate(['home']);
          }


        }, error => {
          console.error('Erro ao excluir a medida:', error);
        });
      } else {
        console.error('ID da medida é inválido');
      }
    }

  cancel(){
    if (this.modal) {
      this.modal.hide();
    }
    this.router.navigate(['home']);
  }



}
