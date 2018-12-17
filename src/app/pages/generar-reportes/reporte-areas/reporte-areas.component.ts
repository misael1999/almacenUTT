import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromReportes from '../../../store/actions';
import { Mensaje } from 'src/app/models/Mensaje';
import { Area } from '../../../models/Area';


@Component({
  selector: 'app-reporte-areas',
  templateUrl: './reporte-areas.component.html',
  styles: []
})
export class ReporteAreasComponent implements OnInit {

  areaSeleccionada: number;
  formReportesAreas: FormGroup;
  areas: Area[];
  loading: boolean;
  loaded: boolean;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new fromReportes.LoadAreas());
    this.store
      .subscribe(resp => {
        this.areas = resp.areas.areas;
        this.loading = resp.reportes.loading;
        this.loaded = resp.reportes.loaded;
      });
   }

  ngOnInit() {
    this.formReportesAreas = new FormGroup({
      del: new FormControl(null, Validators.required),
      al: new FormControl(null, Validators.required)
    });
  }

  seleccionarArea(idArea: number) {
    if (Number(idArea) === 0) {
      this.areaSeleccionada = null;
    } else {
    this.areaSeleccionada = idArea;
      }
  }

  reporteAreas() {
    if (this.formReportesAreas.invalid || this.areaSeleccionada === null) {
      this.store.dispatch(new fromReportes.UiMessageError(new Mensaje(null, 'Selecciona las fechas y el área')));
      return;
    }

    const del = this.formReportesAreas.value.del;
    const al = this.formReportesAreas.value.al;

    this.store.dispatch(new fromReportes.LoadReporteAreas(this.areaSeleccionada, del, al));

  }


}
