import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  styles: [
    "width: 100%;height:100%;font-family: 'Open Sans', sans-serif;background: #092756;background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top,  rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg,  #670d10 0%, #092756 100%);background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg,  #670d10 0%,#092756 100%);background: -o-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg,  #670d10 0%,#092756 100%);background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg,  #670d10 0%,#092756 100%);background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg,  #670d10 0%,#092756 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );"
  ]
})
export class LoginComponent implements OnInit {
  logValue: boolean=false;

  ngOnInit() {
  }
  constructor(private fb:FormBuilder,private p:AuthService,private router:Router) { }

  loginForm = this.fb.group( {
    userEmail:['',Validators.required],
    userPass:['',Validators.required]
  });

  get userEmail() {
    return this.loginForm.get('userEmail');
  }
  get userPass() {
    return this.loginForm.get('userPass');
  }

  

  onSubmit()
{
  this.p.validateUser(this.loginForm.value.userEmail,this.loginForm.value.userPass).subscribe(
    data=>{
      let uObj = data;

      this.logValue = true;

      sessionStorage.setItem("userObj",JSON.stringify(uObj));
      /*let obj=JSON.parse(sessionStorage.getItem("userObj"));
      console.log(obj);*/

      if(uObj.role == 'Buyer'){
        alert("buyer");
      this.router.navigate(['./buyerPage']);
      }
      else if(uObj.role =='Seller'){
        alert("seller");
        this.router.navigate(['./sellerPage']);
      }
      else if(uObj.role == 'Vendor'){
        alert("vendor");
        this.router.navigate(['./vendorPage']);
      }
      else
      {
        alert(" invalid!");
        this.router.navigate(['./']);
     }
     
    },
    error=>{
      alert("Email or Password is incorrect");
    }
  );
  }
}
