import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ReserveComponent } from './views/reserve/reserve.component';
import { CreateReserveComponent } from './components/reserve/create-reserve/create-reserve.component';
import { UpdateReserveComponent } from './components/reserve/update-reserve/update-reserve.component';
import { DeleteReserveComponent } from './components/reserve/delete-reserve/delete-reserve.component';
import { Error404Component } from './views/error404/error404.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'reservas',
    component: ReserveComponent
  },
  {
    path: 'reservas',
    component: CreateReserveComponent
  },
  {
    path: 'reservas/:id',
    component: UpdateReserveComponent
  },
  {
    path: 'reservas/:id/cancelar',
    component: DeleteReserveComponent
  },
  {
    path: '**',
    component: Error404Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
