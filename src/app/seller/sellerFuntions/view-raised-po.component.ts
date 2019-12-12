import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { ConditionalExpr } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-raised-po',
  templateUrl: './view-raised-po.component.html',
  styleUrls: ['./view-raised-po.component.css']
})
export class ViewRaisedPoComponent implements OnInit {
  public lineItems:any;
  show:boolean=false;
  constructor(private ss:SellerService, private router:Router) { }
  purchaseOrders:any;
  ngOnInit() {
    this.ss.getAllPo().subscribe(data=>
      {this.purchaseOrders=data;console.log(this.purchaseOrders)});
  }
  viewLineItems(poId:any){
    this.show=true;
    this.ss.viewAllLineItems(poId).subscribe(data=>
      {this.lineItems=data;console.log(this.lineItems)});
      
  }
}
