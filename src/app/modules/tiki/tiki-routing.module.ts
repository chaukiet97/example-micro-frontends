import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TikiComponent } from './tiki.component';
// import {HealthComponent} from "./modules/health/health.component";

const routes: Routes = [
  {path: '', component:TikiComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TikiRoutingModule { }
