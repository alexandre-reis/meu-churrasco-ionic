import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ChurrascoNovo } from '../models/churrascoNovo';

@Component({
   selector: 'app-tab-churrasco-cadastro',
   templateUrl: './tab-churrasco-cadastro.page.html',
   styleUrls: ['./tab-churrasco-cadastro.page.scss'],
})
export class TabChurrascoCadastroPage implements OnInit {

   churrasco: ChurrascoNovo = new ChurrascoNovo();
   valorMedio = 22.50;

   constructor(
      public apiService: ApiService,
      private router: Router) { }

   ngOnInit() {
      this.initChurrasco();
   }

   initChurrasco() {
      this.churrasco = new ChurrascoNovo();
   }

   calculaQuantidade(churrasco: ChurrascoNovo) {
      if (churrasco.maionese === true || churrasco.arroz === true
         || churrasco.pao === true) {
         churrasco.quantidade_carne = churrasco.quantidade_pessoas * 0.365;
      } else {
         churrasco.quantidade_carne = churrasco.quantidade_pessoas * 0.400;
      }

      churrasco.data = new Date();
      churrasco.valor_total = churrasco.quantidade_carne * this.valorMedio;
      churrasco.id_usuario = '9447cb24-d43f-4ed3-bd59-1742aee5de18';
      console.log(churrasco);
      this.saveChurrasco(churrasco);
   }

   saveChurrasco(churrasco: ChurrascoNovo) {
      this.apiService.save(churrasco).subscribe(response => {
         this.router.navigate(['/tabs/tabChurrascos']);
      });
   }

   clear() {
      this.initChurrasco();
   }

}
