import {
  Component,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { NavService, MenuItem } from '../services/nav.service';

@Component({
  selector: 'application-menu', // tslint:disable-line
  templateUrl: './application-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationMenuComponent implements OnInit {
  mainMenuItems;
  activeMenuItem$: Observable<MenuItem>;

  constructor(private navService: NavService) {
    this.mainMenuItems = this.navService.getMenuItems();
    console.log(this.mainMenuItems);
    this.activeMenuItem$ = this.navService.activeMenuItem$;
  }

  ngOnInit() {

  }
}
