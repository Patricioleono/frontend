import { Injectable } from '@angular/core';
import { ListaGamesI } from 'src/app/interfaces/listagames.interface';
import { OneGameI } from 'src/app/interfaces/onegame.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  urlApi:string = 'https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games';
  urlOneGame:string = 'https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/game';


  constructor(private http:HttpClient) { }

  allGame():Observable<ListaGamesI[]>{
    return this.http.get<ListaGamesI[]>(this.urlApi);
  }

  oneGameAllDetails(idGame:any):Observable<OneGameI[]>{
    return this.http.get<OneGameI[]>(this.urlOneGame + '?id='+idGame);
  }

}
