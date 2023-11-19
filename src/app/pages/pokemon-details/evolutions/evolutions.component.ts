import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';
import { SpecyElement } from 'src/app/models/SpecyElement';
import { TypeColor } from 'src/app/models/TypeColor';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-evolutions',
  templateUrl: './evolutions.component.html',
  styleUrls: ['./evolutions.component.scss']
})
export class EvolutionsComponent implements OnInit {
  selectedPokemon!:Pokemon|null;
  TypeColor:any=TypeColor

  constructor(private pokemonService:PokemonService) { }

  ngOnInit() {
    this.pokemonService.selectedPokemon.subscribe((pokemon)=>{
      this.selectedPokemon=pokemon
      console.log("stat",pokemon)
    })
  }

  get getEvolutionChain():SpecyElement[]{
    return this.selectedPokemon?.pokemon_v2_pokemonspecy?.pokemon_v2_evolutionchain?.pokemon_v2_pokemonspecies!
  }
  get pokemonTypeColor(){
    return this.TypeColor[this.selectedPokemon?.pokemon_v2_pokemontypes![0].pokemon_v2_type.name!]
  }
}
