import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { GET_POKEMON } from "../operations/graphql.operations";
import { Observable, map } from "rxjs";
import { Pokemon } from "../models/Pokemon";
import { DataResponsePokemon } from "../models/DataResponsePokemon";

@Injectable({
    providedIn: 'root'
  })
  export class PokemonService {
  
  
    constructor(private apollo: Apollo) {}
  
    getPostGraphql(): Observable<Pokemon> {
      return this.apollo.watchQuery<DataResponsePokemon>({
        query: GET_POKEMON
      }).valueChanges.pipe(map((res)=>res.data.pokemon_v2_pokemon[0]));
    }
}