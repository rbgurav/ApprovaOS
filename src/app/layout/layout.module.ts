import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SohoComponentsModule } from '@infor/sohoxi-angular';

import { ApplicationMenuComponent } from '../layout/application-menu/application-menu.component';
import { HeaderComponent } from '../layout/header/header.component';

import { NavService } from './services/nav.service';
import { HeaderDynamicRefService } from './header/header-dynamic-ref.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SohoComponentsModule
  ],
  exports: [
    ApplicationMenuComponent,
    HeaderComponent
  ],
  declarations: [
    ApplicationMenuComponent,
    HeaderComponent
  ],
  providers: [
    HeaderDynamicRefService,
    NavService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class LayoutModule { }
