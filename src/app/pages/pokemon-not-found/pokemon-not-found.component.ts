import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-not-found',
  templateUrl: './pokemon-not-found.component.html',
  styleUrls: ['./pokemon-not-found.component.scss']
})
export class PokemonNotFoundComponent   {

  constructor(private router:Router) { }

}
