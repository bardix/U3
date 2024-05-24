
import { Component, OnInit } from '@angular/core';
import { iPost } from '../../Models/ipost';

interface Brand {
  name: string;
  logo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  postsArr: iPost[] = [];
  randomPostsArr: iPost[] = [];
  uniqueBrands: Brand[] = [];

  ngOnInit() {
    this.getPosts().then(() => {
      this.randomPostsArr = this.getRandomPost();
      this.extractUniqueBrands();
    });
  }

  async getPosts() {
    const response = await fetch('../../../assets/db.json');
    this.postsArr = await response.json();
  }

  getRandomPost(): iPost[] {
    const shuffled = [...this.postsArr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  }

  extractUniqueBrands() {
    const uniqueBrandNames = new Set(this.postsArr.map(car => car.brand));
    this.uniqueBrands = Array.from(uniqueBrandNames).map(brandName => ({
      name: brandName,
      logo: this.postsArr.find(car => car.brand === brandName)?.brandLogo || ''
    }));
  }
}
