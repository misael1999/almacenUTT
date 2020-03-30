import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Mensaje } from '../../../models/mensaje';
import * as fromReportes from '../../../store/actions';


@Component({
  selector: 'app-reporte-gastos-area',
  templateUrl: './reporte-gastos-area.component.html',
  styles: []
})
export class ReporteGastosAreaComponent implements OnInit {

  formReporteGastoArea: FormGroup;
  loading: boolean;
  loaded: boolean;

  constructor(private store: Store<AppState>) {
    this.store
    .subscribe(resp => {
      this.loading = resp.reportes.loading;
      this.loaded = resp.reportes.loaded;
    });
   }

  ngOnInit() {
    const date = new Date();
    const mes = (date.getMonth() + 1 < 10) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    const dia = (date.getDate() < 10) ?  '0' + (date.getDate() + 1) : date.getDate() + 1;
    const fecha1 = date.getFullYear() + '-' + mes + '-' + '01';
    const fecha2 = date.getFullYear() + '-' + mes + '-' + dia;
    this.formReporteGastoArea = new FormGroup({
      del: new FormControl(fecha1, Validators.required),
      al: new FormControl(fecha2, Validators.required),
    });
  }


  reporteGastosAreas() {
    if (this.formReporteGastoArea.invalid) {
      this.store.dispatch(new fromReportes.UiMessageError(new Mensaje(null, 'Selecciona las fechas')));
      return;
    }

    const del = this.formReporteGastoArea.value.del;
    const al = this.formReporteGastoArea.value.al;

    this.store.dispatch(new fromReportes.LoadReporteGastoAreas(del, al));

  }

}
