import { Component } from '@angular/core';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';
import {PedidoService} from '../pedido.service';
import { NotifierService } from 'angular-notifier';



@Component({
selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.scss']
})
export class LunchComponent {
  private notifier: NotifierService;
  title = 'lanchonete-fron';

  lanches: any[] = [];


constructor(appService: AppService , private _router: Router, public pedidoService: PedidoService, notifier: NotifierService) {
  this.notifier = notifier;

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

    for (const iterator of Lanches) {
      if (iterator.quantidade > 0) {
        console.log('o lanche escolhido' , iterator );
          for (let index = 0; index < iterator.quantidade; index++) {
            lanchesAjusted.push(iterator);
          }
      }

      this.pedidoService.lanches = lanchesAjusted;
    }

    if (lanchesAjusted.length > 0) {
      this._router.navigate(['../order']);
    } else {
      this.notifier.notify('error', 'Inclua pelo menos um lanche');
    }


    //

  }

  valuechange( qtd , index ) {
    this.lanches[index].quantidade = qtd.target.value;
    console.log('lanches: ' , this.lanches );
  }

}
