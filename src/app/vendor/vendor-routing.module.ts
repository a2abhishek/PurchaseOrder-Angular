import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../error/page-not-found.component';
import { VendorProductsComponent } from './vendorFunctions/vendor-products.component';
import { AllProductsComponent } from './vendorFunctions/all-products.component';
import { AddVendorProductsComponent } from './vendorFunctions/add-vendor-products.component';
import { VendorComponent } from './vendor.component';
import { HeaderComponent } from '../header/header.component';


const adminroutes: Routes = [
  {path:'',component:VendorComponent},
  //{path:'header',component:HeaderComponent},
  {path:'viewAllVendorProducts',component:VendorProductsComponent},
  {path:'viewAllProducts',component:AllProductsComponent},
  {path:'addProductQuantity',component:AddVendorProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(adminroutes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
