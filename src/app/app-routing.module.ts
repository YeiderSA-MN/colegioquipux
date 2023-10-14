import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MateriaComponent } from './materia/materia.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'delete', component: ConfirmDeleteComponent },
  { path: 'materia', component: MateriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
