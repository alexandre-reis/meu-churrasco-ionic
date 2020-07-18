import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabChurrascoCadastroPage } from './tab-churrasco-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: TabChurrascoCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabChurrascoCadastroPageRoutingModule {}
