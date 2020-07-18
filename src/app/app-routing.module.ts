import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab-perfil',
    loadChildren: () => import('./tab-perfil/tab-perfil.module').then( m => m.TabPerfilPageModule)
  },
  {
    path: 'tab-churrascos',
    loadChildren: () => import('./tab-churrascos/tab-churrascos.module').then( m => m.TabChurrascosPageModule)
  },
  {
    path: 'tab-churrasco-detalhe',
    loadChildren: () => import('./tab-churrasco-detalhe/tab-churrasco-detalhe.module').then( m => m.TabChurrascoDetalhePageModule)
  },
  {
    path: 'tab-churrasco-cadastro',
    loadChildren: () => import('./tab-churrasco-cadastro/tab-churrasco-cadastro.module').then( m => m.TabChurrascoCadastroPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
