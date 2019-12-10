import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) {}

  private addUrl:string = "http://localhost:8025/PurchaseOrderFrontEnd/user/";

  addPerson(userObj:any):Observable<any>{
    return this.http.post<any>(this.addUrl,userObj,{responseType: 'text' as 'json' });
  }

  
}
