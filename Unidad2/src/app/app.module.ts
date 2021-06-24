import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { FormularioComponent } from './formulario/formulario.component';
import {FormsModule} from '@angular/forms';
import { ListasComponent } from './listas/listas.component';
import { AzarComponent } from './azar/azar.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { FormularioNotasComponent } from './formulario-notas/formulario-notas.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { PipesComponent } from './pipes/pipes.component';
import { EstilosComponent } from './estilos/estilos.component';
import { CrudComponent } from './formativa3.1/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    FormularioComponent,
    ListasComponent,
    AzarComponent,
    OpcionesComponent,
    FormularioReactivoComponent,
    FormularioNotasComponent,
    DirectivasComponent,
    PipesComponent,
    EstilosComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
