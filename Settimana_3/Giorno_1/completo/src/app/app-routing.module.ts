import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'active',
    loadChildren: () => import('./active-posts/active-posts-module.module').then(m => m.ActivePostsModule)
  },
  {
    path: 'inactive',
    loadChildren: () => import('./inactive-posts/inactive-posts-module.module').then(m => m.InactivePostsModule)
  },
  {
    path: 'post/:id',
    loadChildren: () => import('./post-detail/post-detail-module.module').then(m => m.PostDetailModule)
  },
  {
    path: '',
    loadChildren: () => import('./homepage/homepage-module.module').then(m => m.HomepageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
