import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePostComponent } from 'src/app/single-post/single-post.component';

@NgModule({
  declarations: [
    SinglePostComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SinglePostComponent
  ]
})
export class SharedModule { }
