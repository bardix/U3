import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ToDoCompletedComponent } from './Pages/to-do-completed/to-do-completed.component';
import { UsersComponent } from './Pages/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ToDoCompletedComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
