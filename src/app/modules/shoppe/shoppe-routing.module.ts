import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ShoppeComponent } from './shoppe.component';
// import {HealthComponent} from "./modules/health/health.component";

const routes: Routes = [
  {path: '', component:ShoppeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppeRoutingModule { }
