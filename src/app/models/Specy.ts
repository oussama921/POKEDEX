import { SpecyElement } from "./SpecyElement"

export interface Specy{
    pokemon_v2_evolutionchain:{
        pokemon_v2_pokemonspecies:SpecyElement[]
    }
    pokemon_v2_pokemoncolor:{
        name:string
    }
    pokemon_v2_pokemonspeciesflavortexts:[
        {
            flavor_text:string
        }
    ]
}