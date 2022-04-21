import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  id!: number
  title = ''
  price = 0
  description = ''
  category = ''
  rate = 0
  img = ''
  isMostrar = true
  constructor(private _store: StoreService, private aRoute: ActivatedRoute) {
    this.id = +this.aRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.getProductById()
  }

/**
 * @description: Funcion para obtener los productos 
 * @author ramon.perez
 * @version 1.0.0,20/04/2022
 * @returns: Propiedades del cada producto traido de la API
 */
  getProductById() {
    this._store.getAllProductosById(this.id).subscribe(response => {
        this.title = response.title
        this.price = response.price
        this.description = response.description
        this.category = response.category
        this.rate = response.rating.rate
        this.img = response.image
        this.isMostrar = false
    })
  }
}
