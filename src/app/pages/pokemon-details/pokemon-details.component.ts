import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/models/Pokemon';
import { TypeColor } from 'src/app/models/TypeColor';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  selectedPokemon?:Pokemon
  TypeColor:any=TypeColor
  selectedTab=1
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private pokemonService:PokemonService) { }

  ngOnInit() {
    this.pokemonService.selectedPokemon.subscribe(pokemon=>{
      if(pokemon){
        this.selectedPokemon = pokemon
      }else{
        this.activatedRoute.queryParams.subscribe((params:any)=>{
          if(params.pokemon){
            this.pokemonService.GetPokemon(params.pokemon,null).subscribe((pokemon:Pokemon)=>{
              if(pokemon){
                this.selectedPokemon = pokemon
                this.pokemonService.selectedPokemon.next(this.selectedPokemon)
                console.log(pokemon)
              }else{
                this.backToMain()
              }
            })
          }else{
            this.backToMain()
          }
        })
      }
    })
   
  }
  get pokemonTypeColor(){
    return this.TypeColor[this.selectedPokemon?.pokemon_v2_pokemontypes![0].pokemon_v2_type.name!]
  }
  backToMain(){
    this.router.navigate([''])
  }
}
