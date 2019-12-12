import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerComponent } from './buyer.component';
import { RaisePoComponent } from './buyerFunctions/raise-po.component';
import { ViewAllPoComponent } from './buyerFunctions/view-all-po.component';
import { BannerComponent } from '../banner/banner.component';


const routes: Routes = [
  {path: '', component:BuyerComponent},
  {path:'raisePo', component:RaisePoComponent},
  {path:'viewAllPo',component:ViewAllPoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
