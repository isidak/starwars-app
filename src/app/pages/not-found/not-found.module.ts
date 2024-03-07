import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { SharedModule } from "../../modules/shared/shared.module";



@NgModule({
  declarations: [
    NotFoundComponent
  ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class NotFoundModule { }
