import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerComponent } from './buyer.component';
import { BuyerRoutingModule } from './buyer-routing.module';



@NgModule({
  declarations: [BuyerComponent],
  imports: [
    CommonModule,BuyerRoutingModule
  ],
  exports: [ BuyerComponent ]
})
export class BuyerModule { }
