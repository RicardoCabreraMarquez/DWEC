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
      console.log('hola');
    }


}

