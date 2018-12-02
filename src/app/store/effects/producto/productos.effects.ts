import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as productosActions from '../../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import {ProveedorService } from 'src/app/services/service.index';
import { of } from 'rxjs';
import { ProductoService } from '../../../services/producto/producto.service';


@Injectable()
export class ProductosEffects {
    constructor(private actions$: Actions, private productoService: ProductoService) {}

    @Effect()
    loadProductos$ = this.actions$.ofType(productosActions.LOAD_PRODUCTOS)
        .pipe(
            switchMap(action => {
                return this.productoService.getProductos(action['page'])
                    .pipe(
                       map(data => {
                            return new productosActions.LoadProductosSuccess(data['productos']['content'], data['productos']);
                       }),
                       catchError(error => {
                            return of(new productosActions.LoadProductosFail(error));
                       })
                    );
            })
        );

    @Effect()
    SerachProductos$ = this.actions$.ofType(productosActions.SEARCH_PRODUCTOS)
        .pipe(
            switchMap(action => {
                return this.productoService.getProductosByDescripcion(action['termino'])
                    .pipe(
                       map(data => {
                            return new productosActions.SearchProductosSuccess(data['productos']);
                       }),
                       catchError(error => {
                            return of(new productosActions.SearchProductosFail(error));
                       })
                    );
            })
        );
}

