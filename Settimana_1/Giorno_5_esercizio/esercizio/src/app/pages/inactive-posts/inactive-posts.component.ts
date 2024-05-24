import { Component, OnInit } from '@angular/core';
import { iPost } from '../../Models/ipost';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss'
})
export class InactivePostsComponent implements OnInit {
  postArr: iPost[] = [];

  ngOnInit() {
    this.getactivePosts();
  }

  async getactivePosts() {
    const res = await fetch('../../../assets/db.json');
    const posts = await res.json();
    this.postArr = posts.filter((post: { brand: string; }) => post.brand.toLowerCase() === 'ford'); // Filtra solo i modelli Fiat
  }
}
