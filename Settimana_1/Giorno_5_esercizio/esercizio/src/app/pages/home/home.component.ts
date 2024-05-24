import { Component } from '@angular/core';
import { iPost } from '../../Models/ipost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  postsArr:iPost [] = [];

  ngOnInit(){

    this.getPosts()

  }
    async getPosts(){
      const response = await fetch('../../../assets/db.json')
      const posts = <iPost[]> await response.json();
      this.postsArr = posts;
      console.log(this.postsArr);

    }
  }

