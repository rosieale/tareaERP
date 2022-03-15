import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { TicketPendientesComponent } from './ticket-pendientes/ticket-pendientes.component';
import { TicketResueltosComponent } from './ticket-resueltos/ticket-resueltos.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'categorias', component: CategoriasComponent},
      { path: 'ticket-pendientes', component: TicketPendientesComponent},
      { path: 'ticket-resueltos', component: TicketResueltosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionDeServicioRoutingModule { }
