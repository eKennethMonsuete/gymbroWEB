import { CreateMeasuresService } from './create-measures.service';
import { Component, OnInit } from '@angular/core';
import { Measures } from './measures';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-measures',
  templateUrl: './create-measures.component.html',
  styleUrls: ['./create-measures.component.css']
})
export class CreateMeasuresComponent implements OnInit {

  measures : Measures[] = [];

  measuresDTO : Measures = {weight : 0,
    left_biceps : 0 ,
    right_biceps : 0,
    waist : 0 ,
    left_quadriceps : 0 ,
    right_quadriceps : 0 ,
    left_calf : 0 ,
    right_calf : 0,
    user_id: 0}



  constructor(private createMeasuresService : CreateMeasuresService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
   const id = localStorage.getItem("id")
    if(id){
      this.measuresDTO.user_id = Number(id);
      if (!isNaN(this.measuresDTO.user_id)) {
        console.log('User ID recuperado do localStorage e convertido para número:');
      } else if(isNaN(this.measuresDTO.user_id)) {
        console.log('Falha na conversão do User ID para número.');
      }
    } else {
      console.log('Nenhum User ID encontrado no localStorage.');
    }
  }

  saveMeasures(){
    this.createMeasuresService.createMeasure(this.measuresDTO).subscribe(
      resposta => {
        alert("medidas salvas")
      }, error => {
        console.log("deu erro", error)
      }
    )



  }

  cancel(){
    const id1 = localStorage.getItem("id")
    if(id1){
      this.measuresDTO.user_id = Number(id1);}

    console.log("tem um id aqui " + id1)
    alert("aqui não faz nada")
  }

}
