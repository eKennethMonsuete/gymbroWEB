
import { ActivatedRoute } from '@angular/router';
import { ListMeasuresService } from './../../measures/list-measures/list-measures.service';
import { WorkoutListService } from './../../workout/workout-list/workout-list.service';
import { Component, OnInit } from '@angular/core';
import { Measures } from './Measures';
import { User } from './user';
import { UserUpdateService } from 'src/app/user/user-update/user-update.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  idUser: number | null = null;
  name: string = "";
  measures: Measures[] = [];
  user : User[] = [];



  constructor(private listMeasuresService : ListMeasuresService,
    private route: ActivatedRoute,
    private userService : UserUpdateService


  ) { }

  ngOnInit(): void {
    this.getMeasureID();
    this.getUserId();

    console.log(this.idUser);




  }

  getMeasureID(){
    //Obtém o ID do localStorage
    const idString = localStorage.getItem('id');
    const id = idString !== null ? +idString : NaN;
    this.idUser = id;

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


  getUserId(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.findUserById(parseInt(id)).subscribe(user => {
        this.user = user;
      });
    }
  }



  }


