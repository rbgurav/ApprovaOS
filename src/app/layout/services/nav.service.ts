import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

export class MenuItem {
  path: string;
  title: string;
  icon?: string;
}

@Injectable()
export class NavService {
  activeMenuItem$: Observable<MenuItem>;

  constructor(private router: Router, private titleService: Title) {
    this.activeMenuItem$ = this.router.events
      .filter(e => e instanceof NavigationEnd)
      .map(_ => this.router.routerState.root)
      .map(route => {
        const active = this.lastRouteWithMenuItem(route.root);
        this.titleService.setTitle(active.title);
        return active;
      });
  }

  getMenuItems(): MenuItem[] {
      const manageRoutes = this.router.config
          .filter(route => route.data && route.data.title && route.data.parent) // only add a menu item for routes with a title set.
          .filter(route => route.data.parent.toLowerCase() === 'manage')
          .map(route => {
              return {
                  path: route.path,
                  title: route.data.title,
                  icon: route.data.icon
              };
          });

        const menuItems = [];
        menuItems.push({
          menu: 'Manage',
          subMenu: manageRoutes
        });
        return menuItems;
  }

  private lastRouteWithMenuItem(route: ActivatedRoute): MenuItem {
    let lastMenu;
    do { lastMenu = this.extractMenu(route) || lastMenu; }
    while ((route = route.firstChild));
    return lastMenu;
  }

  private extractMenu(route: ActivatedRoute): MenuItem {
      const cfg = route.routeConfig;
      return cfg && cfg.data && cfg.data.title
          ? { path: cfg.path, title: cfg.data.title, icon: cfg.data.icon }
          : undefined;
  }
}
