import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isValid:boolean=false;
  ngOnInit() {
      
      let obj=JSON.parse(sessionStorage.getItem("userObj"));
      console.log(obj);
      if(obj===null){

        this.isValid=true;
      }
      else {
        this.isValid=false;
      }

  }

}
