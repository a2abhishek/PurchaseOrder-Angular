import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerComponent } from '../buyer/buyer.component';
import { SellerComponent } from '../seller/seller.component';
import { VendorComponent } from '../vendor/vendor.component';
import { PageNotFoundComponent } from '../error/page-not-found.component';


const routes: Routes = [
  {path:'buyerPage',component:BuyerComponent},
  {path:'sellerPage',component:SellerComponent},
  {path:'vendorPage',component:VendorComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
