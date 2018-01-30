import { Injectable } from '@angular/core';
import { HeaderComponent } from './header.component';

/**
 * Special service used by a "root router-outlet component": i.e. ListComponent, FormComponent. etc...
 * to set the banner headers toolbar options and state.
 */
@Injectable()
export class HeaderDynamicRefService {
  private headerComponent: HeaderComponent;

  public set instance(sohoHeaderComponent: HeaderComponent) {
    this.headerComponent = sohoHeaderComponent;
  }

  public get instance(): HeaderComponent {
    return this.headerComponent;
  }
}
