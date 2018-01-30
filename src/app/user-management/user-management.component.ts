import { Component, OnInit } from '@angular/core';

import { HeaderDynamicRefService } from '../layout/header/header-dynamic-ref.service';

@Component({
  selector: 'approva-os-user-management', // tslint:disable-line
  templateUrl: './user-management.component.html'
})

export class UserManagementComponent implements OnInit {
  constructor(private headerRef: HeaderDynamicRefService) { }

  ngOnInit() {
    this.headerRef.instance.sectionTitle = 'User';
  }
}
