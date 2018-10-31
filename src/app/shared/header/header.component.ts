import { Component, OnInit } from '@angular/core';
declare function initPlugins();


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    initPlugins();
  }

}
