import { Component, OnInit } from '@angular/core';
declare function init_plugins();
declare function init_footable_all();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
    init_footable_all();
  }

}
