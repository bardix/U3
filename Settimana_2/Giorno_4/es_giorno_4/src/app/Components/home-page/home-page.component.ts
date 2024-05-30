import { Component, OnInit } from '@angular/core';
import { ImgServiceService } from '../../Services/img-service.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  itemsArray: any[] = [];
  likeCounter: number = 0;

  constructor(private imgService: ImgServiceService) {}

  ngOnInit() {
    this.imgService.getPhotos().subscribe(data => {
      this.itemsArray = data;
    });

    this.imgService.getLikeCounter().subscribe(count => {
      this.likeCounter = count;
    });
  }

  deleteCard(index: number) {
    this.itemsArray.splice(index, 1);
  }

  likeCard(item: any) {
    item.likes = (item.likes || 0) + 1;
    this.imgService.incrementLikeCounter();
  }
}

