import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as proveedorActions from '../../actions';
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';
import {ProveedorService } from 'src/app/services/service.index';
import { of } from 'rxjs';
import { UPDATE_PROVEEDOR, UpdateProveedorSuccess, UpdateProveedorFail } from '../../actions/proveedor/proveedor.actions';


@Injectable()
export class ProveedorEffects {
    constructor(private actions$: Actions, private proveedorService: ProveedorService) {}

    @Effect()
    crearProveedor$ = this.actions$.ofType(proveedorActions.CREATE_PROVEEDOR)
        .pipe(
            mergeMap(action => {
                const proveedor = action['proveedor'];
                return this.proveedorService.agregarProveedor(proveedor)
                    .pipe(
                       map(data => {
                            return new proveedorActions.CreateProveedorSuccess(data);
                       }),
                       catchError(error => {
                            return of(new proveedorActions.CreateProveedorFail(error));
                       })
                    );
            })
        );

        @Effect()
    deleteProveedor$ = this.actions$.ofType(proveedorActions.UPDATE_PROVEEDOR)
        .pipe(
            mergeMap(action => {
                const proveedor = action['proveedor'];
                return this.proveedorService.deleteProveedor(proveedor)
                    .pipe(
                       map(data => {
                            return new proveedorActions.UpdateProveedorSuccess(data);
                       }),
                       catchError(error => {
                            return of(new proveedorActions.UpdateProveedorFail(error));
                       })
                    );
            })
        );
}

