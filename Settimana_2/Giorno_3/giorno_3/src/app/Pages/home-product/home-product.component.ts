import { Component, OnInit } from '@angular/core';
import { ProdottiserviceService } from '../../Services/prodottiservice.service';
import { IProduct } from '../../Modules/i-product';
import { IJson } from '../../Modules/i-json';
import { NgbToastService } from '../../Services/ngb-toast.service'; // Importa il servizio

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
})
export class HomeProductComponent implements OnInit {
  prodotti: IProduct[] = [];

  constructor(
    private prodottiserviceService: ProdottiserviceService,
    private toastService: NgbToastService // Inietta il servizio
  ) {}

  ngOnInit() {
    this.prodottiserviceService.getProdotti().subscribe((data: IJson) => {
      this.prodotti = data.products;
      console.log(this.prodotti);
    });
  }

  aggiungiAiPreferiti(prodotto: IProduct) {
    this.prodottiserviceService.aggiungiProdotto(prodotto).subscribe(() => {
      this.toastService.show(`${prodotto.title} aggiunto ai preferiti`, { classname: 'bg-success text-light', delay: 5000 });
    });
  }
}
