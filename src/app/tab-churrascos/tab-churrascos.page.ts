import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Churrasco } from '../models/churrasco';
import { Router } from '@angular/router';

@Component({
   selector: 'app-tab-churrascos',
   templateUrl: './tab-churrascos.page.html',
   styleUrls: ['./tab-churrascos.page.scss'],
})
export class TabChurrascosPage implements OnInit {

   listChurrascos: any;

   constructor(
      public apiService: ApiService,
      private router: Router,
   ) {
      this.listChurrascos = [];
   }

   ngOnInit() {
   }

   ionViewWillEnter() {
      this.getAllBBQs();
   }

   getAllBBQs() {
      this.apiService.getList().subscribe(response => {
         this.listChurrascos = response;
      });
   }

   organizar() {
      this.router.navigate(['/tabs/tabCadastro']);
   }

   detalhe(id) {
      console.log(id)
      this.router.navigate(['/tabs/tabDetalhe']);
   }


}
