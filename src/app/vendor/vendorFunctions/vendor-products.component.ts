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
    let uObj=JSON.parse(sessionStorage.getItem("userObj"));
    let vendorId=uObj.userId;

    this.vs.viewAllVendorProducts(vendorId).subscribe(data =>
      {this.vendorProducts = data;
      console.log(this.vendorProducts);})
  }
  

}
