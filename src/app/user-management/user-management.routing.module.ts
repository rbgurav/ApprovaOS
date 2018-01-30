import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserManagementComponent } from './user-management.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './adduser/adduser.component';

const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent,
    children: [
      { path: '',  redirectTo: 'userlist', pathMatch: 'full' },
      { path: 'userlist',  component: UserListComponent },
      { path: 'adduser',  component: AddUserComponent }
    ],
    data: {
      title: 'User',
      parent: 'Manage'
    }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserManagementRoutingModule {
  static components = [ UserManagementComponent, UserListComponent, AddUserComponent ];
}
