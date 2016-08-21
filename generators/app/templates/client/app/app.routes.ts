/*!
* ThingSpace
* Copyright(c) 2016 Verizon Irving UI <irvui@verizon.com>
* MIT Licensed
*/

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/index';
import {
  ColorsComponent,
  FontsComponent,
  IconsComponent
} from './styleguide/index';

// Route config let's you map routes to components
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fonts', component: FontsComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'icons', component: IconsComponent }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [HomeComponent, FontsComponent, IconsComponent, ColorsComponent];
