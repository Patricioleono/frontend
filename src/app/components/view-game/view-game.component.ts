import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OneGameI } from 'src/app/interfaces/onegame.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-view-game',
  templateUrl: './view-game.component.html',
  styleUrls: ['./view-game.component.css']
})
export class ViewGameComponent implements OnInit{
  oneGame:any;

  constructor(private activaterouter:ActivatedRoute, private router:Router, private api:ApiService){  }

  ngOnInit(): void {
    let idGame = this.activaterouter.snapshot.paramMap.get('idGame');
    
    this.api.oneGameAllDetails(idGame).subscribe(data => {
      this.oneGame = data;
      console.log(this.oneGame)
    })
  }

}
