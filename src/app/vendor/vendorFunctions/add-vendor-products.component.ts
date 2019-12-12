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
    console.log(this.productId+" "+this.quantity);
    this.vs.addQuantity(this.productId,this.quantity).
    subscribe(data => console.log("Quantity Added"));
    alert("Quantity Added");
    // let obj=new Vendor();
   
    // obj.productId=this.pro;
    // obj.quantity=this.quantity;
    // this.addQuantToProducts.push(obj);
  }

}