import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { Global } from './global';

@Injectable()
export class PokemonService{

  public url: string;

  constructor (private _http: HttpClient){
    this.url = Global.url;
  }

  getAnimes():Observable<any>{
    return this._http.get(this.url+'/pokemon?page[limit]=5&page[offset]=0')
  }

}
