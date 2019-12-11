import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logValue: boolean;
  loggedUser: string;
  reload:boolean=true;
  re(){
    if(this.reload) {
    window.location.reload();
    this.reload=false;
    }
  }
  user:any;
  ngOnInit() {

    var obj = JSON.parse(sessionStorage.getItem("userObj"));
    this.user=obj;
    console.log(obj);
    console.log(obj.userName);
    if (obj === null) {
      this.logValue = false;
    }
    else {
      this.logValue = true;
      if (obj.role == 'Buyer') {
        this.loggedUser = 'buyer';
      }
      else if (obj.role == 'Seller') {
        this.loggedUser = 'seller';
      }
      else if (obj.role == 'Vendor') {
        this.loggedUser = 'vendor';
      }
    }
  }
  logout() {
    this.logValue =false;
    this.loggedUser = undefined;
    sessionStorage.clear();
  }
}
