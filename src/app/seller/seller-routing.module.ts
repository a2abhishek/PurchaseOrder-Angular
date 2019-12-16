import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerComponent } from './seller.component';
import { ViewRaisedPoComponent } from './sellerFuntions/view-raised-po.component';


const routes: Routes = [
  {path:'sellerPage',component:SellerComponent},
  {path:'viewPoList',component:ViewRaisedPoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
