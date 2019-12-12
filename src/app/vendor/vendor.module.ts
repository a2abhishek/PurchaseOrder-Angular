import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorComponent } from './vendor.component';
import { VendorProductsComponent } from './vendorFunctions/vendor-products.component';
import { AllProductsComponent } from './vendorFunctions/all-products.component';
import { AddVendorProductsComponent } from './vendorFunctions/add-vendor-products.component';
import { AppRoutingModule } from '../app-routing.module';
import { VendorRoutingModule } from './vendor-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [VendorComponent, VendorProductsComponent, AllProductsComponent, AddVendorProductsComponent,
  ],
  imports: [
    CommonModule,VendorRoutingModule,FormsModule
  ],
  exports: [ VendorComponent, VendorProductsComponent, AllProductsComponent, AddVendorProductsComponent]
})
export class VendorModule { }
