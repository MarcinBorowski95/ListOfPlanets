import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetListComponent } from "./Planets/components/planet-list/planet-list.component";
import { PlanetComponent } from "./Planets/components/planet/planet.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path: 'planet-list', component: PlanetListComponent, data: {title: 'Planet list'}},
  {path: 'planet/:id', component: PlanetComponent},
  {path: '', redirectTo: 'planet-list', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
