import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as facturasActions from '../../actions';
import { map, catchError, mergeMap } from 'rxjs/operators';
import {FacturaService } from 'src/app/services/service.index';
import { of } from 'rxjs';


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


    @Effect()
    searchFacturas$ = this.actions$.ofType(facturasActions.SEARCH_FACTURAS)
            .pipe(
                mergeMap(action => {
                    return this.facturaService.getFacturaLikeTermino(action['termino'])
                        .pipe(
                            map(data => {
                                return new facturasActions.SearchFacturasSuccess(data['facturas']);
                            }),
                            catchError(error => {
                                return of(new facturasActions.SearchFacturasFail(error));
                            })
                        );
                })
            );

    @Effect()
    LoadFacturaWithDocuments$ = this.actions$.ofType(facturasActions.LOAD_FACTURAS_WITH_DOCUMENTS)
        .pipe(
            mergeMap(action => {
                return this.facturaService.getFacturasWithDocuments(action['page'])
                    .pipe(
                         map(data => {
                            return new facturasActions.LoadFacturasWithDocumentsSuccess(data['facturas']['content'], data['facturas']);
                        }),
                        catchError(error => {
                            return of(new facturasActions.LoadFacturasWithDocumentsFail(error));
                        })
                    );
            })
        );

}

