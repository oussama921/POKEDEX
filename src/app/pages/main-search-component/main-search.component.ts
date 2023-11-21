import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss']
})
export class MainSearchComponent {

  nameId: any;
  constructor(
    private router: Router,
    private ToastrService: ToastrService,
    private pokemonService: PokemonService,
  ) { }


  search() {
    console.log(this.nameId)
    let name; let id
    if (isNaN(this.nameId)) {
      name = this.nameId;
      id = null
    } else {
      name = null;
      id = this.nameId
    }

    this.pokemonService.GetPokemon(id, name).subscribe((pokemon: Pokemon) => {
      if (pokemon) {
        this.pokemonService.selectedPokemon.next(pokemon);
        this.navigateToView(pokemon.id)
      } else {
        this.router.navigate(['pokemon-not-found'])
      }
    },
      (error) => {
        this.ToastrService.error("Internal Error.")
      })
  }

  searchRandom() {
    this.pokemonService.getRandomPokemon().subscribe(pokemon => this.navigateToView(pokemon.id))
  }

  navigateToView(pokemon_id: number){
    this.router.navigate(['pokemon-details'], {
      queryParams: {
        pokemon: pokemon_id,
      },
    })
  }
}
