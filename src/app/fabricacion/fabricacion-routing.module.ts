import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesperdiciosComponent } from './desperdicios/desperdicios.component';
import { MateriaPrimaComponent } from './materia-prima/materia-prima.component';
import { ProduccionComponent } from './produccion/produccion.component';

const routes: Routes = [
  {
    path: '', children: [
    { path: 'materia-prima', component: MateriaPrimaComponent},
    { path: 'produccion', component: ProduccionComponent},
    { path: 'desperdicios', component: DesperdiciosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FabricacionRoutingModule { }
