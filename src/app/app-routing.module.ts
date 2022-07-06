import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
// import {HealthComponent} from "./modules/health/health.component";

const routes: Routes = [
  {
    path: 'shoppe',
    loadChildren: () => import('../../projects/shoppe/src/app/shoppe.module').then(m => m.ShoppeModule)
  },
  {
    path: 'tiki',
    loadChildren: () => import('../../projects/tiki/src/app/tiki.module').then(m => m.TikiModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
