import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SohoComponentsModule } from '@infor/sohoxi-angular';
import { RequestRoutingModule } from './request.routing.module';

import { RequestMainComponent } from './request.component';
import { RequestListComponent  } from './request-list/request-list.component';
import { RequestNewComponent  } from './request-new/request-new.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SohoComponentsModule,
    RequestRoutingModule
  ],
  exports: [
    RequestMainComponent,
    RequestListComponent,
    RequestNewComponent
  ],
  declarations: [
    RequestMainComponent,
    RequestListComponent,
    RequestNewComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RequestModule { }
