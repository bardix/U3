import { Component, OnInit } from '@angular/core';
import { ProdottiserviceService } from '../../Services/prodottiservice.service';
import { IProduct } from '../../Modules/i-product';
import { IJson } from '../../Modules/i-json'; // Importazione aggiunta di IJson

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
})
export class HomeProductComponent implements OnInit {
  prodotti: IProduct[] = [];

  constructor(private prodottiserviceService: ProdottiserviceService) {}

  ngOnInit() {
    this.prodottiserviceService.getProdotti().subscribe((data:IJson) => { // Specificato il tipo di data come IJson
      this.prodotti = data.products; // Assumendo che IJson abbia una proprietà products che è un array di IProduct
      console.log(this.prodotti); // Per verificare i dati ricevuti
    });
  }
}
