import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendoComponent } from './sendo.component';
import { SedoRoutingModule } from './sendo-routing.module';



@NgModule({
  declarations: [
    SendoComponent
  ],
  imports: [
    CommonModule,
    SedoRoutingModule
  ]
})
export class SendoModule { }
