import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import { Proveedor } from '../../../models/proveedor';
import * as fromReportes from '../../../store/actions';
import { Mensaje } from 'src/app/models/mensaje';
import { FormGroup } from '@angular/forms';
import { URL_SERVICIOS } from '../../../global/config';


@Component({
  selector: 'app-reporte-productos-proveedor',
  templateUrl: './reporte-productos-proveedor.component.html',
  styles: []
})
export class ReporteProductosProveedorComponent implements OnInit {

  proveedores: Proveedor[];
  loading: boolean;
  loaded: boolean;
  @ViewChild('txtProveedor') txtProveedor: ElementRef;
  public url = '';
  public api = 'http';
  public params = {};
  public query = '';


  constructor(private store: Store<AppState>) {

    this.store
      .subscribe(resp => {
        this.proveedores = resp.proveedores.provedores;
        this.loading = resp.reportes.loading;
        this.loaded = resp.reportes.loaded;
      });
   }

  ngOnInit() {
  }

  colocarText(proveedor: Proveedor) {
    this.txtProveedor.nativeElement.value = proveedor.nombre;
    this.proveedores = [];
  }

  buscarProveedor(termino: string) {
    this.url = URL_SERVICIOS + '/proveedores/todo/' + termino;
  }

  reporteProductosProveedores() {
    if (this.query === undefined) {
      this.store.dispatch(new fromReportes.UiMessageError(new Mensaje(null, 'Selecciona un proveedor')));
      return;
    }
    this.store.dispatch(new fromReportes.LoadReporteProductosProveedores(this.query));
  }

  public handleHttpResultSelected (result) {
    this.query = result;
  }



}
