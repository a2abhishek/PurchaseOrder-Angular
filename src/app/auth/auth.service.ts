import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logout() {
    throw new Error("Method not implemented.");
  }

  constructor(private http:HttpClient) { }

addUser(userObj:any):Observable<any>{
    return this.http.post<any>("http://localhost:8025/PurchaseOrderUI/user",userObj,
    {responseType:'text' as 'json'});

  }

  validateUser(userEmail:any,userPass:any):Observable<any>{
    return this.http.post<any>("http://localhost:8025/PurchaseOrderUI/userLogin?userEmail="+userEmail+"&&userPass="+userPass,null,{responseType: 'text' as 'json'});
  }
}