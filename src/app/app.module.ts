import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './store/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppEffects } from './store/app.effects';
import { environment } from "../environments/environment";
import { PlanetListWrapperComponent } from './Planets/containers/planet-list-wrapper/planet-list-wrapper.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { SearchPipe } from './Planets/pipe/search.pipe';
import { PlanetListComponent } from './Planets/components/planet-list/planet-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetListWrapperComponent,
    SearchPipe,
    PlanetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [SearchPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
