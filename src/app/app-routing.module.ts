import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSearchComponentComponent } from './pages/main-search-component/main-search-component.component';
import { PokemonNotFoundComponent } from './pages/pokemon-not-found/pokemon-not-found.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainSearchComponentComponent
  },
  {
    path: 'pokemon-not-found',
    component: PokemonNotFoundComponent
  },
  {
    path: 'pokemon-details',
    component: PokemonDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
