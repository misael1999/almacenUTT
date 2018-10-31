import { Component, OnInit } from '@angular/core';
declare function initPlugins();

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initPlugins();
  }

}
