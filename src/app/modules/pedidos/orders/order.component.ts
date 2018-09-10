import { Component } from '@angular/core';
import { AppService } from '../../../app.service';
import {PedidoService} from '../pedido.service';

@Component({
  selector: 'app-order-lunch',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {

  title = 'lanchonete-fron';

  lanches: any[] = [];
  totalCost = 0;


constructor(public appService: AppService , pedidoService: PedidoService) {

  this.lanches = pedidoService.lanches;
  console.log(this.lanches);

}

  teste( Lanches: any) {
  const order: any = {};
  let dontHaveIngredient: boolean ;
  dontHaveIngredient = true;

   for (const iterator of Lanches) {
        for (const ingredient of iterator.ingredients) {
          if (ingredient.qtd > 0) {
            dontHaveIngredient = false;
          }
        }
   }

   if (dontHaveIngredient) {
    console.log('existem lanches sem ingredientes');
   } else {
    order.totalCost = '';
    order.lunchs = Lanches;

    this.appService.postLunch(order).subscribe(
      lunchs  => {

      const retorno: any = lunchs;
      console.log(retorno);

      this.lanches = retorno.lunchs;
      this.totalCost = retorno.totalCost;
      // this.lanches = lunchs.lunchs;
    });
   }

  }



  ingredientChange( qtd , indiceLanche, indiceIngredient ) {
  console.log(qtd.target.value);
  console.log(indiceLanche);
  console.log(indiceIngredient);

  console.log();

  this.lanches[indiceLanche].ingredients[indiceIngredient].qtd = qtd.target.value;
    console.log('lanches: ' , this.lanches );
  }
}
