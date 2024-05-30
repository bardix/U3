import { Component, OnInit } from '@angular/core';
import { ProdottiserviceService } from '../../Services/prodottiservice.service';
import { IProduct } from '../../Modules/i-product';

@Component({
  selector: 'app-favourite-product',
  templateUrl: './favourite-product.component.html',
  styleUrl: './favourite-product.component.scss'
})
export class FavouriteProductComponent implements OnInit {
  prodotti: IProduct[] = [];

  constructor(private prodottiserviceService: ProdottiserviceService) {}

  ngOnInit() {
    this.loadFavouriteProducts();
  }

  loadFavouriteProducts() {
    this.prodottiserviceService.getProdottiPreferiti().subscribe((data: IProduct[]) => {
      this.prodotti = data;
    });
  }
  removeFavouriteProduct(id: number) {
    this.prodottiserviceService.eliminaProdotto(id).subscribe(() => {
      this.prodotti = this.prodotti.filter((prodotto: IProduct) => prodotto.id !== id);
    });
  }
}
function removeFavouriteProduct(id: any, number: any) {
  throw new Error('Function not implemented.');
}

