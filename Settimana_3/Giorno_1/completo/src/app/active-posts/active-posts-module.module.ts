import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivePostsComponent } from './active-posts.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ActivePostsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ActivePostsComponent }
    ])
  ]
})
export class ActivePostsModule {}
