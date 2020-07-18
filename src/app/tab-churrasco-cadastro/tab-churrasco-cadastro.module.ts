import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabChurrascoCadastroPageRoutingModule } from './tab-churrasco-cadastro-routing.module';

import { TabChurrascoCadastroPage } from './tab-churrasco-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabChurrascoCadastroPageRoutingModule
  ],
  declarations: [TabChurrascoCadastroPage]
})
export class TabChurrascoCadastroPageModule {}
