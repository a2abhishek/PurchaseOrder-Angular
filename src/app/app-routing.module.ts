import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { PageNotFoundComponent } from './error/page-not-found.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { VendorComponent } from './vendor/vendor.component';

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
  },
  
  {path:'**',component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
