import { Component, OnInit } from '@angular/core';
import { iPost } from '../../Models/ipost';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {
  postArr: iPost[] = [];

  ngOnInit() {
    this.getactivePosts();
  }

  async getactivePosts() {
    const res = await fetch('../../../assets/db.json');
    const posts = await res.json();
    this.postArr = posts.filter((post: { brand: string; }) => post.brand.toLowerCase() === 'fiat'); // Filtra solo i modelli Fiat
  }
}
