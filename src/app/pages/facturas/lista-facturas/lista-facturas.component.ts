import { Component, OnInit } from '@angular/core';
declare function init_factura_inputs();

@Component({
  selector: 'app-lista-facturas',
  templateUrl: './lista-facturas.component.html',
  styles: []
})
export class ListaFacturasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_factura_inputs();
  }

}
