import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { VideosComponent } from './componentes/videos/videos.component';
import { PreciosComponent } from './componentes/precios/precios.component';
import { FotosComponent } from './componentes/fotos/fotos.component';
import { RancherasComponent } from './componentes/rancheras/rancheras.component';
import { CorridosComponent } from './componentes/corridos/corridos.component';
import { RomanticosComponent } from './componentes/romanticos/romanticos.component';
import { MamaComponent } from './componentes/mama/mama.component';
import { PapaComponent } from './componentes/papa/papa.component';
import { QuinceaneraComponent } from './componentes/quinceanera/quinceanera.component';
import { BailableComponent } from './componentes/bailable/bailable.component';
import { VeloriosComponent } from './componentes/velorios/velorios.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    InicioComponent,
    VideosComponent,
    PreciosComponent,
    FotosComponent,
    RancherasComponent,
    CorridosComponent,
    RomanticosComponent,
    MamaComponent,
    PapaComponent,
    QuinceaneraComponent,
    BailableComponent,
    VeloriosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
