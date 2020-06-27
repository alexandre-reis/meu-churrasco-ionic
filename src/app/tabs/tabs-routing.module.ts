import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tabChurrascos',
        loadChildren: () => import('../tab-churrascos/tab-churrascos.module').then(m => m.TabChurrascosPageModule)
      },
      {
        path: 'tabPerfil',
        loadChildren: () => import('../tab-perfil/tab-perfil.module').then(m => m.TabPerfilPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tabChurrascos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabChurrascos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
