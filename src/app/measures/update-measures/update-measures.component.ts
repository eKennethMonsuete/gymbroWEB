import { UpdateMeasuresService } from './update-measures.service';
import { Component, OnInit } from '@angular/core';
import { Measures } from '../create-measures/measures';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-measures',
  templateUrl: './update-measures.component.html',
  styleUrls: ['./update-measures.component.css']
})
export class UpdateMeasuresComponent implements OnInit {


  measureId : number = 0;
  measure : Measures = {
    weight : 0,
    left_biceps : 0,
    right_biceps : 0,
    waist : 0,
    left_quadriceps : 0,
    right_quadriceps : 0,
    left_calf : 0,
    right_calf : 0,
    user_id : 0,

  }

  constructor(
    private updateMeasuresService : UpdateMeasuresService,
    private  route: ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.measureId = id !== null ? +id : 0;

  }

  updateMeasure(){
    this.updateMeasuresService.updateMeasure(this.measureId, this.measure).subscribe(
      resposta => {
        alert('deu certo');
        console.log(this.measure)
        console.log(resposta)
        this.router.navigate(['home']);
      }, error =>{
        console.log(error)
      }

    )

  }

  cancel(){
    this.router.navigate(['home']);
  }

}
