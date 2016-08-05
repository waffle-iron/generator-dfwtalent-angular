/*!
* ThingSpace
* Copyright(c) 2016 Verizon Irving UI <irvui@verizon.com>
* MIT Licensed
*/

import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home/index';
import {
  ColorsComponent,
  FontsComponent,
  IconsComponent
} from './styleguide/index';

// Route config let's you map routes to components
const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'fonts', component: FontsComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'icons', component: IconsComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
