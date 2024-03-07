import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieListComponent} from './movie-list.component';
import {MovieCardModule} from "../movie-card/movie-card.module";


@NgModule({
  declarations: [
    MovieListComponent
  ],
  exports: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    MovieCardModule
  ]
})
export class MovieListModule {
}
