import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TikiComponent } from './tiki.component';
import { TikiRoutingModule } from './tiki-routing.module';



@NgModule({
  declarations: [
    TikiComponent
  ],
  imports: [
    CommonModule,
    TikiRoutingModule
  ]
})
export class TikiModule { }
