import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SohoComponentsModule } from '@infor/sohoxi-angular';
import { UserManagementRoutingModule } from './user-management.routing.module';

import { UserManagementComponent } from './user-management.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './adduser/adduser.component';
import { RoleAssignmentsComponent } from './adduser/role-assignments/role-assignments.component';
import { UserSummaryComponent } from './adduser/summary/summary.component';
import { UserDetailsComponent } from './adduser/user-details/user-details.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SohoComponentsModule,
    UserManagementRoutingModule
  ],
  exports: [
    UserManagementComponent,
    UserListComponent,
    AddUserComponent,
    RoleAssignmentsComponent,
    UserSummaryComponent,
    UserDetailsComponent
  ],
  declarations: [
    UserManagementComponent,
    UserListComponent,
    AddUserComponent,
    RoleAssignmentsComponent,
    UserSummaryComponent,
    UserDetailsComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserManagementModule { }
