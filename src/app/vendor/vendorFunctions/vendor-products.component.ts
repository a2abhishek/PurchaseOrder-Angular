import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-products',
  templateUrl: './vendor-products.component.html',
  styleUrls: ['./vendor-products.component.css']
})
export class VendorProductsComponent implements OnInit {

  public vendorProducts:any;

  constructor(private vs:VendorService) { }

  ngOnInit(): void {
    this.vs.viewAllVendorProducts().subscribe(data =>
      this.vendorProducts = data);
  }
  

}
