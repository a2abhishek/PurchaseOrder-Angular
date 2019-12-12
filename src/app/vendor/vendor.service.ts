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


  addQuantity(productId:number,quantity:number):Observable<any>{
    console.log(productId,quantity);
    return this.http.post<string>("http://localhost:8025/PurchaseOrderUI/updateProductQuantity?pId="+productId+"&&quantity="+quantity,null);
  }

  viewAllVendorProducts():Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8025/PurchaseOrderUI/viewAllAvailableProducts");
  }}
