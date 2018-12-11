import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as productoActions from '../../actions';
import { map, catchError, mergeMap } from 'rxjs/operators';
import {ProductoService } from 'src/app/services/service.index';
import { of } from 'rxjs';


@Injectable()
export class ProductoEffects {
    constructor(private actions$: Actions, private productoService: ProductoService) {}

    @Effect()
    crearProducto$ = this.actions$.ofType(productoActions.CREATE_PRODUCTO)
        .pipe(
            mergeMap(action => {
                const producto = action['producto'];
                return this.productoService.agregarProducto(producto)
                    .pipe(
                       map(data => {
                            return new productoActions.CreateProductoSuccess(data);
                       }),
                       catchError(error => {
                            return of(new productoActions.CreateProductoFail(error));
                       })
                    );
            })
        );

        @Effect()
    updateProducto$ = this.actions$.ofType(productoActions.UPDATE_PRODUCTO)
        .pipe(
            mergeMap(action => {
                const producto = action['producto'];
                return this.productoService.actualizarProducto(producto)
                    .pipe(
                       map(data => {
                            return new productoActions.UpdateProductoSuccess(data);
                       }),
                       catchError(error => {
                            console.log(error);
                            return of(new productoActions.UpdateProductoFail(error));
                       })
                    );
            })
        );
}

