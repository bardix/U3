import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteProductComponent } from './Pages/favourite-product/favourite-product.component';

const routes: Routes = [
  { path: 'favourite-product', component: FavouriteProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
