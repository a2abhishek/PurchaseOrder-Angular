import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  constructor(private http:HttpClient) { }
  url="http://localhost:8025/PurchaseOrderUI/viewProducts";

  getAllProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProductNameById(id:number):Observable<Product> {
    return this.http.get<Product>("http://localhost:8025/PurchaseOrderUI/getProductNameById?productId="+id);
  }

  raisePoForm(poArr:any,uId:number)
  {
    return this.http.post<any>("http://localhost:8025/PurchaseOrderUI/purchaseOrder/"+uId,poArr);
  }

}