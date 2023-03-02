import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
  providers: [PokemonService]
})
export class PokemonListComponent implements OnInit {

  //@Input() public pokemons: Array<any>
  @Input() public pokemon: String;

  @Input() public pokemons: Pokemon[];

  constructor(private _pokemonService: PokemonService) {
    this.nombre = "";
    this.pokemon = [
      new Pokemon("Vaporeon", "https://www.pngplay.com/wp-content/uploads/12/Vaporeon-Pokemon-PNG-Photos.png"),
      new Pokemon("Flareon", ""),
      new Pokemon("Vaporeon", ""),
      new Pokemon("Vaporeon", ""),
    ]
  }

  ngOnInit(): void {
    this._pokemonService.getPokemons().suscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  seleccionar(event: any){
    console.log(event);
  }

}
