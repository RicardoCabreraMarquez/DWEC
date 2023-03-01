import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inicio-pokemon',
  templateUrl: './inicio-pokemon.component.html',
  styleUrls: ['./inicio-pokemon.component.css']
})
export class PokemonListComponent  implements OnInit {



    @Input() public name: String;

    constructor() {
      this.name = "";

    }

    ngOnInit(): void {
      //TODO Añadir llamada a la peticion que se muestra en el video

    }

    elegirPokemon(event: any) {
      console.log(event.target.value);


    }


};




