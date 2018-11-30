import { Component, OnInit } from '@angular/core';
declare function init_upload();
@Component({
  selector: 'app-cargar-factura',
  templateUrl: './cargar-factura.component.html',
  styles: []
})
export class CargarFacturaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_upload();
  }

}
