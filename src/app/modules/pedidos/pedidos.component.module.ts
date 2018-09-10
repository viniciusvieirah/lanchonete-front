import { NgModule } from '@angular/core';
import { LunchComponent } from './lunchs/lunch.component';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './orders/order.component';
import { PedidoService } from './pedido.service';


@NgModule({
  declarations: [
    LunchComponent,
    OrderComponent
  ],
  imports: [
    CommonModule
  ]
})


export class PedidosModule {}
