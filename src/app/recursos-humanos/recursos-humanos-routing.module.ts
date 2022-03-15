import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratacionesComponent } from './contrataciones/contrataciones.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { SalariosComponent } from './salarios/salarios.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'contrataciones', component: ContratacionesComponent},
      { path: 'salarios', component: SalariosComponent},
      { path: 'empleados', component: EmpleadosComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecursosHumanosRoutingModule { }
