
import { ActivatedRoute } from '@angular/router';
import { ListMeasuresService } from './../../measures/list-measures/list-measures.service';
import { WorkoutListService } from './../../workout/workout-list/workout-list.service';
import { Component, OnInit } from '@angular/core';
import { Measures } from './Measures';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  name: string = "";
  measures: Measures[] = [];



  constructor(private listMeasuresService : ListMeasuresService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.getMeasureID();


  }

  getMeasureID(){
    //Obtém o ID do localStorage
    const idString = localStorage.getItem('id');
    const id = idString !== null ? +idString : NaN;

    if (isNaN(id)) {
      // Lidar com erro se o ID não for um número válido
      console.error('ID inválido:', id);
      return;}

    this.listMeasuresService.getMyMeasures(id).subscribe( resposta =>  {
      this.name = resposta.name;
      this.measures = resposta.measures;
      console.log('Measures loaded:', this.measures);
    }, error => {
      console.error('Erro :', error);
    });

  }



  }


