import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listProducts: any[] = []
  isCargando = true

  constructor(private _store: StoreService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this._store.getAllProductos().subscribe(response => {
      this.listProducts = response
    })
  }

}
