import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { MainSearchComponent } from './pages/main-search-component/main-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonNotFoundComponent } from './pages/pokemon-not-found/pokemon-not-found.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { BackComponent } from './pages/back/back.component';
import { StatsComponent } from './pages/pokemon-details/stats/stats.component';
import { EvolutionsComponent } from './pages/pokemon-details/evolutions/evolutions.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonService } from './services/pokemon.service';
import { Apollo } from 'apollo-angular';
import { ButtonComponent } from './components/button/button.component';
import { ChipComponent } from './components/chip/chip.component';
import { TabComponent } from './components/tab/tab.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { ArrowComponent } from './components/arrow/arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSearchComponent,
    PokemonNotFoundComponent,
    PokemonDetailsComponent,
    BackComponent,
    StatsComponent,
    EvolutionsComponent,
    ButtonComponent,
    ChipComponent,
    TabComponent,
    PokemonCardComponent,
    ArrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule ,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [PokemonService, Apollo],
  bootstrap: [AppComponent]
})
export class AppModule { }
