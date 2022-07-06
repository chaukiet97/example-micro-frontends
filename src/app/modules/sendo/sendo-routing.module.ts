import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SendoComponent } from './sendo.component';
// import {HealthComponent} from "./modules/health/health.component";

const routes: Routes = [
  {path: '', component:SendoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SedoRoutingModule { }
