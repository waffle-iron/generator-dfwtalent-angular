/*!
* ThingSpace
* Copyright(c) 2016 Verizon Irving UI <irvui@verizon.com>
* MIT Licensed
*/

import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'header',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

}
