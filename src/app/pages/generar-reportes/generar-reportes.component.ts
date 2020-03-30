import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Producto } from '../../models/producto';
import * as fromReportes from '../../store/actions';
import { Mensaje } from 'src/app/models/mensaje';
import { URL_SERVICIOS } from '../../global/config';
import { Proveedor } from '../../models/proveedor';
import { Area } from '../../models/area';
@Component({
  selector: 'app-generar-reportes',
  templateUrl: './generar-reportes.component.html',
  styles: []
})
export class GenerarReportesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
