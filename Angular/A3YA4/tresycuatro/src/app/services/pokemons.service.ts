import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Global } from './global';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PokemonService {
  public url: string;
  public type= 'fire';


  constructor (private http: HttpClient){
    this.url =Global.url;

  }

getPokemons():Observable<any>{
  return this.http.get(this.url+this.type);
}
}
