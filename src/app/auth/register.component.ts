import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  styles:[]
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private p:AuthService,private router:Router) { }
  ngOnInit() {
  }
  userForm = this.fb.group( {
    userName:['',[Validators.required,Validators.minLength(3)]],
    userEmail:['',Validators.required],
    userPhone:['',Validators.required],
    userPass:['',Validators.required],
    userAddress:['',Validators.required]
  });

  get userName() {
    return this.userForm.get('userName');
  }
  get userEmail() {
    return this.userForm.get('userEmail');
  }
  get userPhone() {
    return this.userForm.get('userPhone');
  }
  get userPass() {
    return this.userForm.get('userPass');
  }
  get userAddress() {
    return this.userForm.get('userAddress');
  }
  onSubmit(){
    this.p.addUser(this.userForm.value).subscribe(data=>{console.log(data);});
    // //location.reload(true);
    this.router.navigate(['/login']);
  }
}