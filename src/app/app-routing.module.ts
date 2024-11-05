import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { FotosComponent } from './componentes/fotos/fotos.component';
import { VideosComponent } from './componentes/videos/videos.component';
import { PreciosComponent } from './componentes/precios/precios.component';
import { RancherasComponent } from './componentes/rancheras/rancheras.component';
import { CorridosComponent } from './componentes/corridos/corridos.component';
import { RomanticosComponent } from './componentes/romanticos/romanticos.component';
import { MamaComponent } from './componentes/mama/mama.component';
import { PapaComponent } from './componentes/papa/papa.component';
import { QuinceaneraComponent } from './componentes/quinceanera/quinceanera.component';
import { BailableComponent } from './componentes/bailable/bailable.component';
import { VeloriosComponent } from './componentes/velorios/velorios.component';

const routes: Routes = [
  { path: '', component: InicioComponent }, // Ruta para la página de inicio
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'fotos', component: FotosComponent},
  { path: 'videos', component: VideosComponent},
  { path: 'precios', component: PreciosComponent},
  { path: 'rancheras', component: RancherasComponent},
  { path: 'corridos', component: CorridosComponent},
  { path: 'romantico', component: RomanticosComponent},
  { path: 'mama', component: MamaComponent},
  { path: 'papa', component: PapaComponent},
  { path: 'quinceañera', component: QuinceaneraComponent},
  { path: 'bailable', component: BailableComponent},
  { path: 'velorios', component: VeloriosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
