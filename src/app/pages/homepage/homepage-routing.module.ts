import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage.component";

const routes: Routes = [
  {
    path: '', component: HomepageComponent,
  },
  {
    path: 'movies', loadChildren: () => import('../movie/movie.module') .then(m => m.MovieModule),
  },
  {
    path: 'characters', loadChildren: () => import('../character/character.module') .then(m => m.CharacterModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
