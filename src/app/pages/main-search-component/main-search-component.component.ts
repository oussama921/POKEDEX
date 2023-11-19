import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-main-search-component',
  templateUrl: './main-search-component.component.html',
  styleUrls: ['./main-search-component.component.scss']
})
export class MainSearchComponentComponent {

  nameId:any;
  constructor(private pokemonService:PokemonService,private router:Router,private toastr: ToastrService){}
  
  search(){
    console.log(this.nameId)
    let name;let id
    if(isNaN(this.nameId)){
      name=this.nameId;
      id=null
    }else{
      name=null;
      id=this.nameId
    }
    
    this.pokemonService.GetPokemon(id,name).subscribe((pokemon:Pokemon)=>{
      if(pokemon){
        this.pokemonService.selectedPokemon.next(pokemon);
        this.router.navigate(['pokemon-details'], {
          queryParams: {
            pokemon: pokemon.id,
          },
        })
      }else{
        this.router.navigate(['pokemon-not-found'])
      }
    },
    (error)=>{
      this.toastr.error("Internal Error.")
    })
  }

  searchRandom(){
    this.pokemonService.getRandomPokemon().subscribe(res=>{console.log(res)})
  }
}
