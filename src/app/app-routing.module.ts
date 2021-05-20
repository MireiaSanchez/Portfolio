import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { MainComponent } from './components/main/main.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { DescubremeComponent } from './descubreme/descubreme.component';

const routes: Routes = [
  { path: 'discover', component: DescubremeComponent},
  { path: '', redirectTo: '/main/about', pathMatch: 'full' },
  { path: 'main', component: MainComponent, children:  [
    {path: 'about', component: SobreMiComponent },
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'habilidades', component: HabilidadesComponent},
    {path: 'idiomas', component: CurriculumComponent},
    {path: 'contacto', component: ContactoComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
