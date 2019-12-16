import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http:HttpClient) { }
  
  url="http://localhost:8025/PurchaseOrderUI/viewProducts";

  getAllProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }


  addQuantity(productId:number,quantity:number,vendorId:number):Observable<any>{
    return this.http.get<any>("http://localhost:8025/PurchaseOrderUI/updateProductQuantity?productId="+productId
    +"&&quantity="+quantity+"&&vendorId="+vendorId,{responseType:'text' as 'json'});
  }

  viewAllVendorProducts(vendorId:number):Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8025/PurchaseOrderUI/viewAllAvailableProducts?vendorId="+vendorId);
  }
}
