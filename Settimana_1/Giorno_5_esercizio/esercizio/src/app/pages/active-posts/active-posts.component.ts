import { Component } from '@angular/core';
import { iPost } from '../../Models/ipost';


@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss'
})
export class ActivePostsComponent {
postArr: iPost[]= [];

ngOnInit(){

  this.getactivePosts();

}

async getactivePosts(){
  const res = await fetch('../../../assets/db.json');
  const posts = <iPost[]> await res.json();
}

}
