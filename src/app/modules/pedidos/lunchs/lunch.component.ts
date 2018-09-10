import { Component } from '@angular/core';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';
import {PedidoService} from '../pedido.service';



@Component({
selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.scss']
})
export class LunchComponent {

  title = 'lanchonete-fron';

  lanches: any[] = [];


constructor(appService: AppService , private _router: Router, public pedidoService: PedidoService) {
  appService.listLunchs().subscribe(lunchs => {

  const retorno: Object[] = [];
  for (const key of lunchs) {

    retorno.push(key);

  }

    this.lanches = retorno;
  } );
}

  teste( Lanches: any) {
    const lanchesAjusted = [];
    console.log('entrou' , JSON.stringify(Lanches));
    for (const iterator of Lanches) {
      if (iterator.quantidade > 0) {
        console.log('o lanche escolhido' , iterator );
          for (let index = 0; index < iterator.quantidade; index++) {
            lanchesAjusted.push(iterator);
          }
      }

      this.pedidoService.lanches = lanchesAjusted;
      this._router.navigate(['../order']);
    }

    console.log('lanches ajustados: ' , lanchesAjusted);


  }

  valuechange( qtd , index ) {
    this.lanches[index].quantidade = qtd.target.value;
    console.log('lanches: ' , this.lanches );
  }

}
