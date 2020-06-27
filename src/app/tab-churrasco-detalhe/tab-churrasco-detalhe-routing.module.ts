import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabChurrascoDetalhePage } from './tab-churrasco-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: TabChurrascoDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabChurrascoDetalhePageRoutingModule {}
