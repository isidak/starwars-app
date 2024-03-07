import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from "./homepage.component";
import { MovieListModule } from "../../modules/movie-list/movie-list.module";


@NgModule({
    declarations: [
        HomepageComponent,
    ],
    imports: [
        CommonModule,
        HomepageRoutingModule,
        MovieListModule
    ]
})
export class HomepageModule {
}
