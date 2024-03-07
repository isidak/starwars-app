import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from "./character.component";

const routes: Routes = [
    {path: ':id', component: CharacterComponent},
    {pathMatch: 'prefix', path: '**', redirectTo: '/'}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CharacterRoutingModule {
}
