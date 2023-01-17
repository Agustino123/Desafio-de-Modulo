import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { miComponente } from './components/miComponentea/miComponente.component';
import { miPagina } from './components/pagina/pagina.component';
import { inicio } from './components/inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    miComponente,
    miPagina,
    inicio
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA]
})
export class AppModule { }
