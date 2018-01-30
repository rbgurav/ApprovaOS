import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequestMainComponent } from './request.component';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestNewComponent } from './request-new/request-new.component';

const routes: Routes = [
  {
    path: 'request',
    component: RequestMainComponent,
    children: [
      { path: '',  redirectTo: 'requestlist', pathMatch: 'full' },
      { path: 'requestlist',  component: RequestListComponent },
      { path: 'newrequest',  component: RequestNewComponent }
    ],
    data: {
      title: 'Request',
      parent: 'Manage'
    }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class RequestRoutingModule {
  static components = [ RequestMainComponent, RequestListComponent, RequestNewComponent ];
}
