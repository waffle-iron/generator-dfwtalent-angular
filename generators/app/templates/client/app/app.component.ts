/*!
* ThingSpace
* Copyright(c) 2016 Verizon Irving UI <irvui@verizon.com>
* MIT Licensed
*/

import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {HeaderComponent} from './shared/index';
import { HomeComponent } from './home/index';
import {
  ColorsComponent,
  FontsComponent,
  IconsComponent
} from './styleguide/index';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    directives: [
      ROUTER_DIRECTIVES,
      HeaderComponent,
      HomeComponent,
      ColorsComponent,
      FontsComponent,
      IconsComponent
    ]
})
export class AppComponent { }
