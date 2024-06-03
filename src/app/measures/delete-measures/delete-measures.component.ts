import { Measures } from './../list-measures/measures';

import { DeleteMeasuresService } from './delete-measures.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-delete-measures',
  templateUrl: './delete-measures.component.html',
  styleUrls: ['./delete-measures.component.css']
})
export class DeleteMeasuresComponent implements OnInit {

  measureId : number = 0;
  //|| null

  constructor(private router: Router,
              private route : ActivatedRoute,
              private deleteMeasuresService : DeleteMeasuresService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.measureId = id !== null ? +id : 0;

    }




  delete(): void {
    if (this.measureId !== 0) {
      this.deleteMeasuresService.deleteMeasure(this.measureId).subscribe(response => {
        // Lógica após a exclusão (redirecionamento, mensagem de sucesso, etc.)
        this.router.navigate(['home']); // Redireciona para a home após a exclusão
      }, error=> {
        // Lógica de tratamento de erro
        console.error('Erro ao excluir a medida:', error);
      });
    } else {
      console.error('ID da medida é inválido');
    }
  }

  cancel(){
    this.router.navigate(['home']);
  }



}
