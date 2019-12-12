import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-add-vendor-products',
  templateUrl: './add-vendor-products.component.html',
  styleUrls: ['./add-vendor-products.component.css']
})
export class AddVendorProductsComponent implements OnInit {

  constructor(private vs:VendorService) { }

  public productArray: Product[];
  public productId:number;
  public quantity:number;
  
  ngOnInit() {

      this.vs.getAllProducts().subscribe(data =>
        this.productArray = data);

      
  }

  addQuantity(){
    let uObj=JSON.parse(sessionStorage.getItem("userObj"));
    let vendorId=uObj.userId;

    console.log('Vendor Id : '+vendorId);

    console.log(this.productId+" "+this.quantity);
    this.vs.addQuantity(this.productId,this.quantity,vendorId).
    subscribe(data => console.log("Quantity Added"));
    alert("Quantity Added");
  }

}