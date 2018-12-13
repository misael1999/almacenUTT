import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Producto } from '../../models/Producto';
import * as fromReportes from '../../store/actions';
import { Mensaje } from 'src/app/models/Mensaje';
import { URL_SERVICIOS } from '../../global/config';
import { Proveedor } from '../../models/Proveedor';
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
   mes: number;
   ano: number;
   proveedores: Proveedor[];
   @ViewChild('txtProveedor') txtProveedor: ElementRef;
   @ViewChild('txtFecha1') txtFecha1: ElementRef;
   @ViewChild('txtFecha2') txtFecha2: ElementRef;
   nombreProveedor: string;

  constructor(private store: Store<AppState>) {
    for (let i = 2017; i < 2030; i++) {
      this.anos.push(i + 1);
    }
    this.store
      .subscribe(resp => {
        this.proveedores = resp.proveedores.provedores;
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

  colocarText(proveedor: Proveedor) {
    this.txtProveedor.nativeElement.value = proveedor.nombre;
    this.proveedores = [];
  }

  buscarProveedor(termino: string) {
    if (termino.length < 2) {
      this.proveedores = [];
      return;
    }
    this.store.dispatch(new fromReportes.SearchProveedores(termino));
  }

  reporteProductosProveedores() {
    const nombre = this.txtProveedor.nativeElement.value;
    if (nombre === undefined) {
      this.store.dispatch(new fromReportes.UiMessageError(new Mensaje(null, 'Selecciona un proveedor')));
      return;
    }
    window.open(URL_SERVICIOS + '/reportes/productos/proveedor/' + nombre);
  }

  reporteGastosAreas() {
    const fecha1 = this.txtFecha1.nativeElement.value;
    const fecha2 = this.txtFecha2.nativeElement.value;
    if (fecha1 === '' || fecha2 === '') {
      this.store.dispatch(new fromReportes.UiMessageError(new Mensaje(null, 'Selecciona las fechas')));
      return;
    }
    window.open(URL_SERVICIOS + '/reportes/areas/gastos?del=' + fecha1 + '&al=' + fecha2);
  }

}
