import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as facturasActions from '../../actions';
import { map, catchError, mergeMap } from 'rxjs/operators';
import {FacturaService } from 'src/app/services/service.index';
import { of } from 'rxjs';
import { LOAD_FACTURAS_ENTREGADAS } from '../../actions/factura/facturas.actions';


@Injectable()
export class FacturasEffects {
    constructor(private actions$: Actions, private facturaService: FacturaService) {}

    @Effect()
    loadFacturasActivas$ = this.actions$.ofType(facturasActions.LOAD_FACTURAS_ACTIVAS)
        .pipe(
            mergeMap(action => {
                return this.facturaService.getFacturasActivas(action['page'])
                    .pipe(
                       map(data => {
                            return new facturasActions.LoadFacturasActivasSuccess(data['facturas']['content'], data['facturas']);
                       }),
                       catchError(error => {
                            return of(new facturasActions.LoadFacturasActivasFail(error));
                       })
                    );
            })
        );


    @Effect()
    loadFacturasEntregadas$ = this.actions$.ofType(facturasActions.LOAD_FACTURAS_ENTREGADAS)
        .pipe(
            mergeMap(action => {
                return this.facturaService.getFacturasEntregadas(action['page'])
                    .pipe(
                        map(data => {
                            return new facturasActions.LoadFacturasEntregadasSuccess(data['facturas']['content'], data['facturas']);
                        }),
                        catchError(error => {
                            return of(new facturasActions.LoadFacturasEntregadasFail(error));
                        })
                    );
            })
        );

}

