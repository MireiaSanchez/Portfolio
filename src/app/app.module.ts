import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DescubremeComponent } from './descubreme/descubreme.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SobreMiComponent,
    ProyectosComponent,
    HabilidadesComponent,
    CurriculumComponent,
    ContactoComponent,
    DescubremeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
