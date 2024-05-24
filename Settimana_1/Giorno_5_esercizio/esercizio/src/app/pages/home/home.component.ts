import { Component } from '@angular/core';
import { iPost } from '../../Models/ipost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  postsArr:iPost [] = [];
  firstPost!:iPost;
  secondPost!:iPost;
  randomPostsArr:iPost[] = [];


  ngOnInit(){

    this.getPosts().then(()=>{

    let firstPost = this.getFirstPost();
    let secondPost = this.getSecondPost();
    if (secondPost) {
      this.secondPost = secondPost;
    }

    if (firstPost) {
      this.firstPost = firstPost;
    }

    this.randomPostsArr= this.getRandomPost()
  })

  }
    async getPosts(){
      const response = await fetch('../../../assets/db.json')
      const posts = <iPost[]> await response.json();
      this.postsArr = posts;
      console.log(this.postsArr);

    }
    getSecondPost(){
      return this.postsArr[1];
    }

    getFirstPost(){
      return this.postsArr.shift();
    }

    getRandomPost() :iPost[] {
      const shuffled = [...this.postsArr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0,2);
    }
  }


