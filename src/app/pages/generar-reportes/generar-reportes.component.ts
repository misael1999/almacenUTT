import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Producto } from '../../models/Producto';
import * as fromReportes from '../../store/actions';
import { Mensaje } from 'src/app/models/Mensaje';
import { URL_SERVICIOS } from '../../global/config';
@Component({
  selector: 'app-generar-reportes',
  templateUrl: './generar-reportes.component.html',
  styles: []
})
export class GenerarReportesComponent implements OnInit {
  meses = [{numero: '1', mes: 'Enero'}, {numero: '2', mes: 'Febrero'},
   {numero: '3', mes: 'Marzo'}, {numero: '4', mes: 'Abril'}, {numero: '5', mes: 'Mayo'},
   {numero: '6', mes: 'Junio'}, {numero: '7', mes: 'Julio'}, {numero: '8', mes: 'Agosto'},
   {numero: '9', mes: 'Septiembre'}, {numero: '10', mes: 'Octubre'}, {numero: '11', mes: 'Noviembre'},
   {numero: '12', mes: 'Diciembre'}];

   anos: any[] = [];
   productos: Producto[];
   mes: number;
   ano: number;

  constructor(private store: Store<AppState>) {
    for (let i = 2017; i < 2030; i++) {
      this.anos.push(i + 1);
    }
    this.store.select('reportes')
      .subscribe(reportes => {
        this.productos = reportes.productos;

      });
   }

  ngOnInit() {
  }

  public reporteProductos() {

    if (this.ano === undefined || this.mes === undefined) {
      this.store.dispatch(new fromReportes.UiMessageError(new Mensaje(null, 'Selecciona el mes y el año')));
      return;
    }
    window.open(URL_SERVICIOS + '/reportes/productos?mes=' + this.mes + '&ano=' + this.ano);
  }


}
