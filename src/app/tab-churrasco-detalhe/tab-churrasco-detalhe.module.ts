import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabChurrascoDetalhePageRoutingModule } from './tab-churrasco-detalhe-routing.module';

import { TabChurrascoDetalhePage } from './tab-churrasco-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabChurrascoDetalhePageRoutingModule
  ],
  declarations: [TabChurrascoDetalhePage]
})
export class TabChurrascoDetalhePageModule {}
