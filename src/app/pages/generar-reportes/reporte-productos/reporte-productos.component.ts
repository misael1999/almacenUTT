import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as fromReportes from '../../../store/actions';
import { Mensaje } from 'src/app/models/Mensaje';

@Component({
  selector: 'app-reporte-productos',
  templateUrl: './reporte-productos.component.html',
  styles: []
})
export class ReporteProductosComponent implements OnInit {

  meses = [{numero: '1', mes: 'Enero'}, {numero: '2', mes: 'Febrero'},
  {numero: '3', mes: 'Marzo'}, {numero: '4', mes: 'Abril'}, {numero: '5', mes: 'Mayo'},
  {numero: '6', mes: 'Junio'}, {numero: '7', mes: 'Julio'}, {numero: '8', mes: 'Agosto'},
  {numero: '9', mes: 'Septiembre'}, {numero: '10', mes: 'Octubre'}, {numero: '11', mes: 'Noviembre'},
  {numero: '12', mes: 'Diciembre'}];

  loading: boolean;
  loaded: boolean;
  formReporteProductos: FormGroup;


  constructor(private store: Store<AppState>) {

    this.store
      .subscribe(resp => {
        this.loaded = resp.reportes.loaded;
        this.loading = resp.reportes.loading;
      });

  }
  ngOnInit() {
    this.formReporteProductos = new FormGroup({
      anio: new FormControl(null, Validators.required),
      mes: new FormControl(null, Validators.required)
    });
  }

  public reporteProductos() {

    if (this.formReporteProductos.invalid) {
      this.store.dispatch(new fromReportes.UiMessageError(new Mensaje(null, 'Selecciona el mes y el año')));
      return;
    }

    const mes = this.formReporteProductos.value.mes;
    const anio = this.formReporteProductos.value.anio;

    this.store.dispatch(new fromReportes.LoadReporteProductos(mes, anio));
  }


}
