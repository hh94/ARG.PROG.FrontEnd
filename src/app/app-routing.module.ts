import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './component/Experiencia/edit-experiencia.component';
import { BarraHerramientasComponent } from './component/barra-herramientas/barra-herramientas.component';
import { EditProyectoComponent } from './component/proyectos/edit-proyecto.component';
import { EditEstudioComponent } from './component/estudio/edit-estudio.component';

import { EditSkillComponent } from './component/hys/edit-skill.component';
import { EditAcercaDeComponent } from './component/encabezado/edit-acerca-de.component';



const router: Routes = [
  { path:'', component: HomeComponent},
  { path: 'login', component: BarraHerramientasComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  
  { path: 'editpro/:id', component: EditProyectoComponent},

  { path: 'editcono/:id', component: EditEstudioComponent},
  
  { path: 'editskill/:id', component: EditSkillComponent},
  
  { path: 'edit/:id', component: EditAcercaDeComponent}



];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
