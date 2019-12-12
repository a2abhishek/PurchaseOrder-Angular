import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }

  getAllPo():Observable<any> {
    return this.http.get<any>("http://localhost:8025/PurchaseOrderUI/viewPoList");
  }

  viewAllLineItems(poId:number):Observable<any> {
    return this.http.get<any>("http://localhost:8025/PurchaseOrderUI/viewLineItems?viewId="+poId);
  }
}