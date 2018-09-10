import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './modules/pedidos/orders/order.component';
import { LunchComponent } from './modules/pedidos/lunchs/lunch.component';


const routes: Routes = [
  {
    path: 'order',
    component: OrderComponent,
    data: {lunchs: {} }
  },
  {
    path: 'lunchs',
    component: LunchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
