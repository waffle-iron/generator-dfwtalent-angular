/*!
* ThingSpace
* Copyright(c) 2016 Verizon Irving UI <irvui@verizon.com>
* MIT Licensed
*/

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { HomeService } from './home.service';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  name: string;
  message: string;

  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this._homeService.getData()
      .subscribe(
      (data) => {
        console.log(data);
        this.name = data.name;
        this.message = data.message;
      },
      (err) => console.log(err)
      )
  }
}
