import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from "@angular/router";


@NgModule({
    declarations: [
        SpinnerComponent,
        NavbarComponent
    ],
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        RouterModule
    ],
    exports: [
        SpinnerComponent,
        NavbarComponent
    ]
})
export class SharedModule {
}
