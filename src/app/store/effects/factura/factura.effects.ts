import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as facturaActions from '../../actions';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { FacturaService } from 'src/app/services/service.index';
import { of } from 'rxjs';
import { saveAs } from 'file-saver';
import swal from 'sweetalert2';

@Injectable()
export class FacturaEffects {
    constructor(private actions$: Actions, private facturaService: FacturaService) {}

    @Effect()
    crearFactura$ = this.actions$.ofType(facturaActions.CREATE_FACTURA)
        .pipe(
            mergeMap(action => {
                const factura = action['factura'];
                return this.facturaService.agregarFactura(factura)
                    .pipe(
                       map(data => {
                            return new facturaActions.CreateFacturaSuccess(data);
                       }),
                       catchError(error => {
                            return of(new facturaActions.CreateFacturaFail(error));
                       })
                    );
            })
        );
    @Effect()
    updateFactura$ = this.actions$.ofType(facturaActions.UPDATE_FACTURA)
        .pipe(
            mergeMap(action => {
                const factura = action['factura'];
                return this.facturaService.actulizarFactura(factura)
                    .pipe(
                       map(data => {
                            return new facturaActions.UpdateFacturaSuccess(data);
                       }),
                       catchError(error => {
                            return of(new facturaActions.UpdateFacturaFail(error));
                       })
                    );
            })
        );

    @Effect()
    loadFactura$ = this.actions$.ofType(facturaActions.LOAD_FACTURA)
        .pipe(
            mergeMap(action => {
                const folio = action['folio'];
                return this.facturaService.getFacturaByFolio(folio)
                    .pipe(
                        map(data => {
                            return new facturaActions.LoadFacturaSuccess(data['factura']);
                        }),
                        catchError(error => {
                            return of(new facturaActions.LoadFacturaFail(error));
                        })
                    );
            })
        );


}
