import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import {  GET_ALL_POKEMONS, GET_POKEMON_BY_ID, GET_POKEMON_BY_NAME } from "../operations/graphql.operations";
import { BehaviorSubject, Observable, Subject, map } from "rxjs";
import { Pokemon } from "../models/Pokemon";
import { DataResponsePokemon } from "../models/DataResponsePokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  selectedPokemon = new BehaviorSubject<Pokemon|null>(null)
  
  constructor(private apollo: Apollo) {}

  GetPokemon(id:number|null,name:string|null): Observable<Pokemon> {
    if(id){
      return this.apollo.watchQuery<DataResponsePokemon>({
        query: GET_POKEMON_BY_ID,
        variables: { id },
      }).valueChanges.pipe(map((res)=>res.data.pokemon_v2_pokemon[0]));
    }else{
      return this.apollo.watchQuery<DataResponsePokemon>({
        query: GET_POKEMON_BY_NAME,
        variables: { name },
      }).valueChanges.pipe(map((res)=>res.data.pokemon_v2_pokemon[0]));
    }
  }
  getRandomPokemon():Observable<Pokemon> {
    return this.apollo.watchQuery<DataResponsePokemon>({
      query: GET_ALL_POKEMONS,
    }).valueChanges.pipe(map((res)=>{
      return res.data.pokemon_v2_pokemon[Math.floor(Math.random() * (res.data.pokemon_v2_pokemon.length - 0) + 0)]
    }));
  }
}