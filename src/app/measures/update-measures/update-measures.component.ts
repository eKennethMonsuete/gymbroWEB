import { UpdateMeasuresService } from './update-measures.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Measures } from './measures';

@Component({
  selector: 'app-update-measures',
  templateUrl: './update-measures.component.html',
  styleUrls: ['./update-measures.component.css']
})
export class UpdateMeasuresComponent implements OnInit {


  //measureId : number = 0;
  measure : Measures = {
    id : 0,
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
    this.measure.id = id !== null ? +id : 0;
    console.log(this.measure.id,"update component", this.measure)

    if (id) {
      this.updateMeasuresService.findMeasureById(parseInt(id)).subscribe((measure) => {
        // Preserve the id in case it is not returned by the API response
        if (measure) {
          measure.id = this.measure.id;
          this.measure = measure;
        }
      });


  }
}

updateMeasure() {
  if (this.measure.id) {
    this.updateMeasuresService.updateMeasure(this.measure.id, this.measure).subscribe(
      resposta => {
        alert('deu certo');
        console.log(this.measure);
        console.log(resposta);
        this.router.navigate(['home']);
      }, error => {
        console.log(error, this.measure.id);
      }
    );
  } else {
    console.error('Measure ID is missing');
  }
}

  cancel(){
    this.router.navigate(['home']);
  }

}
