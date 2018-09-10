import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterializeModule } from 'ngx-materialize';
import {HttpClientModule} from '@angular/common/http';
import { PedidosModule } from './modules/pedidos/pedidos.component.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    HttpClientModule,
    PedidosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
