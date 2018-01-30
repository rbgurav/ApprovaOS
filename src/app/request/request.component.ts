import { Component, OnInit } from '@angular/core';

import { HeaderDynamicRefService } from '../layout/header/header-dynamic-ref.service';

@Component({
  selector: 'approva-os-request', // tslint:disable-line
  template: `<router-outlet></router-outlet>`
})

export class RequestMainComponent implements OnInit {
  constructor(private headerRef: HeaderDynamicRefService) { }

  ngOnInit() {
    this.headerRef.instance.sectionTitle = 'Request';
  }
}
