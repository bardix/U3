import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../pages/shared/shared.module';

 // Start of Selection
@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: HomepageComponent }
    ])
  ],
})
export class HomepageModule {}

