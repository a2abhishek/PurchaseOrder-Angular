import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'',redirectTo:'/',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {
    path: 'buyerPage',loadChildren: './buyer/buyer.module#BuyerModule'
  },
  {
    path: 'sellerPage',loadChildren: './seller/seller.module#SellerModule'
  },
  {
    path: 'vendorPage',loadChildren: './vendor/vendor.module#VendorModule'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
