import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ToDoCompletedComponent } from './Pages/to-do-completed/to-do-completed.component';
import { UsersComponent } from './Pages/users/users.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'to-do-completed', component: ToDoCompletedComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
