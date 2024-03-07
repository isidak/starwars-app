import 'reflect-metadata';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerInterceptorService } from "./interceptors/spinner-interceptor.service";
import { SharedModule } from "./modules/shared/shared.module";
import "@angular/compiler"

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        RouterModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        SharedModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptorService, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
