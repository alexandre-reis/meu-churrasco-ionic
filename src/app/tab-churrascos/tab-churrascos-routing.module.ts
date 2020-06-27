import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabChurrascosPage } from './tab-churrascos.page';

const routes: Routes = [
  {
    path: '',
    component: TabChurrascosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabChurrascosPageRoutingModule {}
