import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as reportesActions from '../../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import {ProveedorService } from 'src/app/services/service.index';
import { of } from 'rxjs';
import { ReporteService } from '../../../services/service.index';


@Injectable()
export class ReportesEffects {
    constructor(private actions$: Actions, private reporteService: ReporteService) {}

    @Effect()
    loadReporteProductos$ = this.actions$.ofType(reportesActions.LOAD_REPORTE_PRODUCTOS)
        .pipe(
            switchMap(action => {
                return this.reporteService.getReportePrductosByMesAndAnio(action['mes'], action['ano'])
                    .pipe(
                       map((data: any) => {
                        const res = new Blob([data], { type: 'application/pdf' });
                        const fileURL = URL.createObjectURL(res);
                        window.open(fileURL);
                        return new reportesActions.LoadReporteProductosSuccess();
                       }),
                       catchError(error => {
                            return of(new reportesActions.LoadReporteProductosFail(error));
                       })
                    );
            })
        );
@Effect()
    loadReporteAreas$ = this.actions$.ofType(reportesActions.LOAD_REPORTE_AREAS)
        .pipe(
            switchMap(action => {
                return this.reporteService.getReporteProductosByAreaAndfechas(action['idArea'], action['del'], action['al'])
                    .pipe(
                       map((data: any) => {
                        const res = new Blob([data], { type: 'application/pdf' });
                        const fileURL = URL.createObjectURL(res);
                        window.open(fileURL);
                        return new reportesActions.LoadReporteAreasSuccess();
                       }),
                       catchError(error => {
                            return of(new reportesActions.LoadReporteAreasFail(error));
                       })
                    );
            })
        );
@Effect()
    loadReporteProductosProveedores$ = this.actions$.ofType(reportesActions.LOAD_REPORTE_PRODUCTOS_PROVEEDORES)
        .pipe(
            switchMap(action => {
                return this.reporteService.getReporteProductosByProveedor(action['proveedor'])
                    .pipe(
                       map((data: any) => {
                        const res = new Blob([data], { type: 'application/pdf' });
                        const fileURL = URL.createObjectURL(res);
                        window.open(fileURL);
                        return new reportesActions.LoadReporteProductosProveedoresSuccess();
                       }),
                       catchError(error => {
                            return of(new reportesActions.LoadReporteProductosProveedoresFail(error));
                       })
                    );
            })
        );
@Effect()
    loadReporteGastoArea$ = this.actions$.ofType(reportesActions.LOAD_REPORTE_GASTOS_AREA)
        .pipe(
            switchMap(action => {
                return this.reporteService.getReportesGastosByAreas(action['del'], action['al'])
                    .pipe(
                       map((data: any) => {
                        const res = new Blob([data], { type: 'application/pdf' });
                        const fileURL = URL.createObjectURL(res);
                        window.open(fileURL);
                        return new reportesActions.LoadReporteGastoAreasSuccess();
                       }),
                       catchError(error => {
                            return of(new reportesActions.LoadReporteGastoAreasFail(error));
                       })
                    );
            })
        );
}

