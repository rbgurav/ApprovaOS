import { Component, QueryList,
  AfterViewInit,
  ViewChild,
  Inject,
  ContentChild } from '@angular/core';
import { Router } from '@angular/router';

import {
  SohoWizardComponent,
  SohoProgressComponent,
  SohoToastService
} from '@infor/sohoxi-angular';

@Component({
  selector: 'approva-os-add-new-user', // tslint:disable-line
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})

export class AddUserComponent {

  @ViewChild(SohoWizardComponent) wizard: SohoWizardComponent;

  public buttons = [
    {
      id: 'prevous',
      text: Locale.translate('Previous'),
      click: () => { this.wizard.previous(); },
      disabled: () => !this.wizard.hasPrevious(),
      position: 'middle'
    },
    {
      id: 'next',
      text: Locale.translate('Next'),
      click: () => { this.onNext(); },
      isDefault: true,
      disabled: () => this.nextButtonDisabled(),
      position: 'middle'
    },
    {
      id: 'finish',
      text: 'Finish', // Locale.translate('Finish'),
      click: () => { this.finish(); },
      disabled: () => !this.wizard.hasFinished(),
      position: 'middle'
    }
  ];

  constructor(private toastService: SohoToastService, private router: Router) {
  }

  nextButtonDisabled() {
    return this.wizard.currentTickId === 'summary';
  }

  onNext() {
    switch (this.wizard.currentTickId) {
      case 'user-details':
        this.wizard.next();
        break;
      case 'role-assignments':
        this.wizard.finish();
        break;
      case 'summary':
        // this.wizard.finish();
        break;
    }
  }

  finish() {
    this.router.navigate(['./userlist']);
  }

  onActivated(e: SohoWizardEvent) {

  }
}
