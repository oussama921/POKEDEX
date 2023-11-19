import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSearchComponentComponent } from './pages/main-search-component/main-search-component.component';

const routes: Routes = [
  {
    path: '',
    component: MainSearchComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
