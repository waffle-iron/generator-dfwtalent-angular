
import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import {Location} from '@angular/common';
// import the WindowRef provider
declare var $:any;
declare var ga:Function;
declare var app: any;

require("../assets/main.scss");

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
  public title = 'UI';

  constructor(private _router: Router, private _location: Location){

  }

	ngOnDestroy(): void{

	}

}
