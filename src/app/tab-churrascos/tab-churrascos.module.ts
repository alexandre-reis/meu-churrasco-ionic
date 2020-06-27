import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabChurrascosPageRoutingModule } from './tab-churrascos-routing.module';

import { TabChurrascosPage } from './tab-churrascos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabChurrascosPageRoutingModule
  ],
  declarations: [TabChurrascosPage]
})
export class TabChurrascosPageModule {}
