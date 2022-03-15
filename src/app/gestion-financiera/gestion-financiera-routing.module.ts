import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosComponent } from './gastos/gastos.component';
import { PagosComponent } from './pagos/pagos.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'pagos', component: PagosComponent},
      { path: 'gastos', component: GastosComponent},
      { path: 'estados-financieros'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionFinancieraRoutingModule { }
