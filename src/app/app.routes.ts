import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';

import { PreloadModulesStrategy } from 'approvaos-core';

const app_routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/user-management' },
  { path: 'request', redirectTo: '/request' },
  { path: 'user-management', loadChildren: 'app/user-management/user-management.module#UserManagementModule'},
  { path: 'request', loadChildren: 'app/request/request.module#RequestModule'},
  { path: '**', pathMatch: 'full', redirectTo: '/user-management' } // catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

