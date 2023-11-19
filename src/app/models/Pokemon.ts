import { Specy } from "./Specy";
import { Stat } from "./Stat";
import { Type } from "./Type";

export interface Pokemon{
    name:string;
    pokemon_v2_pokemonspecy:Specy
    pokemon_v2_pokemonsprites:[{sprites:string}];
    pokemon_v2_pokemonstats:Stat[]
    pokemon_v2_pokemontypes:Type[]

}