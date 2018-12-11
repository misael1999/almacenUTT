import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ValesalidaService } from 'src/app/services/service.index';
import * as valeActions from 'src/app/store/actions';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoadValeSalidaFail } from 'src/app/store/actions';


@Injectable()
export class ValeEffects {
    constructor(private actions$: Actions, private valeService: ValesalidaService) {}

    @Effect()
    crearVale$ = this.actions$.ofType(valeActions.CREATE_VALE_SALIDA)
                    .pipe(
                        mergeMap(action => {
                            const vale  = action['valeSalida'];
                            return this.valeService.agregarValeSalida(vale)
                                .pipe(
                                    map(data => new valeActions.CreateValeSalidaSuccess(data)),
                                    catchError( error => {
                                        console.log(error);
                                        return of(new valeActions.CreateValeSalidaFail(error));
                                    })
                                );
                        })
                    );

    @Effect()
    loadVale$ = this.actions$.ofType(valeActions.LOAD_VALE_SALIDA)
                        .pipe(
                            mergeMap(
                                action => {
                                    const numeroRequisicion = action['numeroRequisicion'];
                                    return this.valeService.getValeByNumber(numeroRequisicion)
                                        .pipe(
                                            map(data => new valeActions.LoadValeSalidaSuccess(data['vale'])),
                                            catchError( error => {
                                                console.log(error);
                                                return of(new LoadValeSalidaFail(error));
                                            })
                                        );
                                }
                            )
                        );
}
