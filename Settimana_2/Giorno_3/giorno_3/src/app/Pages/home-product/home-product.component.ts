import { Component, Inject, OnInit } from '@angular/core';
import { ProdottiserviceService } from '../../Services/prodottiservice.service';
import { IProduct } from '../../Modules/i-product';


@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.scss']
})
export class HomeProductComponent implements OnInit {
  prodotti: IProduct[] = [];


  constructor(private prodottiService: ProdottiserviceService) { }


  ngOnInit() {
    this.prodottiService.getProdotti().subscribe(data => {
      this.prodotti = data.products; // Assicurati che la struttura di 'data' corrisponda a quella ricevuta dal tuo backend
      console.log(this.prodotti);
    });
  }

}
