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
            path: 'tabCadastro',
            // tslint:disable-next-line: max-line-length
            loadChildren: () => import('../tab-churrasco-cadastro/tab-churrasco-cadastro.module').then(m => m.TabChurrascoCadastroPageModule)
         },
         {
            path: 'tabDetalhe',
            loadChildren: () => import('../tab-churrasco-detalhe/tab-churrasco-detalhe.module').then(m => m.TabChurrascoDetalhePageModule)
         },
         {
            path: '',
            redirectTo: '/tabs/tabPerfil',
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
export class TabsPageRoutingModule { }
