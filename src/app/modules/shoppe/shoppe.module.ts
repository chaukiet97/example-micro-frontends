import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppeComponent } from './shoppe.component';
import { ShoppeRoutingModule } from './shoppe-routing.module';



@NgModule({
  declarations: [
    ShoppeComponent
  ],
  imports: [
    CommonModule,
    ShoppeRoutingModule
  ]
})
export class ShoppeModule { }
