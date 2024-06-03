import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InactivePostsComponent } from './inactive-posts.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InactivePostsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: InactivePostsComponent }
    ])
  ]
})
export class InactivePostsModule {}
