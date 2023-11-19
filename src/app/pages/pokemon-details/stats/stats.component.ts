import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';
import { Stats } from 'src/app/models/Stats';
import { TypeColor } from 'src/app/models/TypeColor';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  
  TypeColor:any=TypeColor
  selectedPokemon!:Pokemon|null;
  stats:any=Stats

  constructor(private pokemonService:PokemonService) { }

  ngOnInit() {
    this.pokemonService.selectedPokemon.subscribe((pokemon)=>{
      this.selectedPokemon=pokemon
      console.log("stat",pokemon)
    })
  }

  get pokemonTypeColor(){
    return this.TypeColor[this.selectedPokemon?.pokemon_v2_pokemontypes![0].pokemon_v2_type.name!]
  }
}
