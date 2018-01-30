import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { SohoComponentsModule } from '@infor/sohoxi-angular';
import { CoreModule } from 'approvaos-core';
import { LayoutModule  } from './layout/layout.module';

import { UserManagementModule } from './user-management/user-management.module';
import { RequestModule } from './request/request.module';
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SohoComponentsModule,
    CoreModule,
    LayoutModule,
    UserManagementModule,
    RequestModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
