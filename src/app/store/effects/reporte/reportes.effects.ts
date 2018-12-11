import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as reportesActions from '../../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import {ProveedorService } from 'src/app/services/service.index';
import { of } from 'rxjs';
import { ProductoService } from '../../../services/producto/producto.service';
import { ReporteService } from '../../../services/reporte/reporte.service';


@Injectable()
export class ReportesEffects {
    constructor(private actions$: Actions, private reporteService: ReporteService) {}

    @Effect()
    loadReporteProductos$ = this.actions$.ofType(reportesActions.LOAD_REPORTE_PRODUCTOS)
        .pipe(
            switchMap(action => {
                return this.reporteService.getProductosByMesAndAno(action['page'], action['mes'], action['ano'])
                    .pipe(
                       map(data => {
                            return new reportesActions.LoadReporteProductosSuccess(data['productos']['content'], data['productos']);
                       }),
                       catchError(error => {
                            return of(new reportesActions.LoadReporteProductosFail(error));
                       })
                    );
            })
        );
}

