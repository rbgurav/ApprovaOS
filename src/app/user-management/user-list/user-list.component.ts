import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from 'approvaos-core';

@Component({
  selector: 'approva-os-user-list', // tslint:disable-line
  templateUrl: './user-list.component.html',
  styleUrls: [ './user-list.component.scss' ]
})

export class UserListComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() { }

  addNewUser() {
    this.router.navigate(['./adduser']);
  }
}
