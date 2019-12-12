import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerComponent } from './buyer.component';
import { BuyerRoutingModule } from './buyer-routing.module';
import { RaisePoComponent } from './buyerFunctions/raise-po.component';
import { ViewAllPoComponent } from './buyerFunctions/view-all-po.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BuyerComponent, RaisePoComponent, ViewAllPoComponent
  ],
  imports: [
    CommonModule,BuyerRoutingModule,FormsModule
  ],
  exports: [ BuyerComponent, RaisePoComponent, ViewAllPoComponent ]
})
export class BuyerModule { }
