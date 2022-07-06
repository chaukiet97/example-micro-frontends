import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
// import {HealthComponent} from "./modules/health/health.component";

const routes: Routes = [
  {
    path: 'shoppe',
    loadChildren: () => import('shoppe/ShoppeModule').then(m => m.ShoppeModule)
  },
  {
    path: 'tiki',
    loadChildren: () => import('tiki/TikiModule').then(m => m.TikiModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false, useHash: false, anchorScrolling: 'enabled', preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
