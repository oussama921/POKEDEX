import { gql } from 'apollo-angular'

const GET_POKEMON = gql`
query MyQuery {
    pokemon_v2_pokemon(where: {id: {_eq: 1}}) {
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        effort
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemonspecy {
        pokemon_v2_pokemoncolor {
          name
        }
        pokemon_v2_pokemonspeciesflavortexts(limit: 1, where: {language_id: {_eq: 9}}) {
          flavor_text
        }
        pokemon_v2_evolutionchain {
          pokemon_v2_pokemonspecies(order_by: {order: asc}) {
            name
            order
          }
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
  
`

export { GET_POKEMON }