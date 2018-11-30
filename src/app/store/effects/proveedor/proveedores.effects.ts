import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as proveedoresActions from '../../actions';
import { map, catchError, mergeMap } from 'rxjs/operators';
import {ProveedorService } from 'src/app/services/service.index';
import { of } from 'rxjs';


@Injectable()
export class ProveedoresEffects {
    constructor(private actions$: Actions, private proveedorService: ProveedorService) {}

    @Effect()
    loadProveedores$ = this.actions$.ofType(proveedoresActions.LOAD_PROVEEDORES)
        .pipe(
            mergeMap(action => {
                return this.proveedorService.getProveedores()
                    .pipe(
                       map(data => {
                            return new proveedoresActions.LoadProveedoresSuccess(data['proveedores']);
                       }),
                       catchError(error => {
                            return of(new proveedoresActions.LoadProveedoresFail(error));
                       })
                    );
            })
        );

    @Effect()
    searchProveedores$ = this.actions$.ofType(proveedoresActions.SEARCH_PROVEEDORES)
        .pipe(
            mergeMap(action => {
                return this.proveedorService.getProveedoresByNombre(action['termino'])
                    .pipe(
                       map(data => {
                            return new proveedoresActions.SearchProveedoresSuccess(data['proveedores']);
                       }),
                       catchError(error => {
                            return of(new proveedoresActions.SearchProveedoresFail(error));
                       })
                    );
            })
        );
}

