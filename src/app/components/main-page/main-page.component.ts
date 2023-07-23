import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';

import { ListaGamesI } from 'src/app/interfaces/listagames.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})


export class MainPageComponent implements OnInit {
  game:ListaGamesI[] | undefined;
  temporal:ListaGamesI[] | undefined;

  filteredList:any;
  filteredGenre:any;
  filteredPlatform:any;

  selectFilter:any;
  selectPlatform:any;
  selectedItemGenre:string = 'Seleccione Genero' ;
  selectedItemPlatform:string = 'Seleccione Plataforma'

  constructor(private api:ApiService, private router:Router){  }
  

  ngOnInit(): void {
    this.api.allGame().subscribe( (data) => {
      this.game = data;
      this.temporal = data;
      this.selectFilter = this.game.map( item => item.genre).filter((value, index, self) => self.indexOf(value) === index);
      this.selectPlatform = this.game.map( item => item.platform).filter((value, index, self) => self.indexOf(value) === index);
    })
  }


  viewGame(idGame:number){
    this.router.navigate(['view-game', idGame]);
  }

  handleChangeGenre(){
    this.game = this.temporal;
    let data = this.game?.filter( item => item.genre == this.selectedItemGenre);
    this.game = data;
  }

  handleChangePlatform(){
    this.game = this.temporal;
    let data = this.game?.filter( item => item.platform == this.selectedItemPlatform);
    this.game = data;
  }
}
