import {PLATFORM} from 'aurelia-pal';
import { autoinject } from 'aurelia-dependency-injection';
import {Router, RouterConfiguration} from 'aurelia-router';
import { connectTo, Store } from 'aurelia-store';
import { State } from './state';

@autoinject
@connectTo()
export class App {
  public router: Router;

  public state: State;

  constructor() {
  }

  public configureRouter(config: RouterConfiguration, router: Router): Promise<void> | PromiseLike<void> | void {
    config.title = 'Aurelia';
    config.map([
      {
        route: ['', 'welcome'],
        name: 'welcome',
        moduleId: PLATFORM.moduleName('./welcome'),
        nav: true,
        title: 'Welcome'
      },
      {
        route: 'users',
        name: 'users',
        moduleId: PLATFORM.moduleName('./users'),
        nav: true,
        title: 'Github Users'
      },
      {
        route: 'child-router',
        name: 'child-router',
        moduleId: PLATFORM.moduleName('./child-router'),
        nav: true,
        title: 'Child Router'
      }
    ]);

    this.router = router;
  }
}
