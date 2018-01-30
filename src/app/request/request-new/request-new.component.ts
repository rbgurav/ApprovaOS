import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'approvaos-request-new', // tslint:disable-line
  templateUrl: './request-new.component.html',
  styleUrls: ['./request-new.component.scss']
})

export class RequestNewComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  onTabActivated(event: SohoTabsEvent) {
    console.log(event.tab + ' TabsBasicDemoComponent.onTabActivated');
  }
}
