import { Component, OnInit } from '@angular/core';
import { iPost } from '../../Models/ipost';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  postArr: iPost[] = [];

  ngOnInit() {
    this.getactivePosts();
  }

  async getactivePosts() {
    const res = await fetch('../../../assets/db.json');
    const posts = await res.json();
    this.postArr = posts.filter((post: { brand: string; }) => post.brand.toLowerCase() === 'audi'); // Filtra solo i modelli Fiat
  }
}
