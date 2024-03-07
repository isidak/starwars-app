import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import {MovieComponent} from "./movie.component";
import { SharedModule } from "../../modules/shared/shared.module";


@NgModule({
  declarations: [
    MovieComponent
  ],
    imports: [
        CommonModule,
        MovieRoutingModule,
        SharedModule
    ]
})
export class MovieModule { }
