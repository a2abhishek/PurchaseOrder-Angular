import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  constructor(private vs:VendorService) { }
  public productArray:Product[];

  ngOnInit() {
    this.vs.getAllProducts().subscribe(data=>
      this.productArray=data);
  }

}
