import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Churrasco } from '../models/churrasco';

@Component({
   selector: 'app-tab-churrascos',
   templateUrl: './tab-churrascos.page.html',
   styleUrls: ['./tab-churrascos.page.scss'],
})
export class TabChurrascosPage implements OnInit {

   listChurrascos: any;

   constructor(public apiService: ApiService) {
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

}
