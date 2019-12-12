import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerComponent } from './seller.component';
import { SellerRoutingModule } from './seller-routing.module';
import { ViewRaisedPoComponent } from './sellerFuntions/view-raised-po.component';



@NgModule({
  declarations: [SellerComponent, ViewRaisedPoComponent],
  imports: [
    CommonModule,SellerRoutingModule
  ],
  exports: [ SellerComponent ]
})
export class SellerModule { }
