import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Mensaje } from '../../../models/Mensaje';
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
    this.formReporteGastoArea = new FormGroup({
      del: new FormControl(null, Validators.required),
      al: new FormControl(null, Validators.required),
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
