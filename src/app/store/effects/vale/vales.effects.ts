import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ValesalidaService } from 'src/app/services/service.index';
import * as fromVales from 'src/app/store/actions';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ValesEffects {
    constructor(private actions$: Actions, private valesService: ValesalidaService) {}

    @Effect()
    loadValesSalidaActivos = this.actions$.ofType(fromVales.LOAD_VALES_SALIDA_ACTIVOS)
                            .pipe(
                                mergeMap(action => {
                                    return this.valesService.getValesActivos(action['page'], action['ordenar'])
                                            .pipe(
                                                // tslint:disable-next-line:max-line-length
                                                map(data => new fromVales.LoadValesSalidaActivosSuccess(data['vales']['content'], data['vales'])),
                                                catchError(error => {
                                                    return of(new fromVales.LoadValesSalidaActivosFail(error));
                                                })
                                            );
                                })
                            );

    @Effect()
    loadValesSalidaArea = this.actions$.ofType(fromVales.LOAD_VALES_SALIDA_AREA)
                                    .pipe(
                                        mergeMap(action => {
                                            return this.valesService.getValesByIdArea(action['idArea'])
                                                .pipe(
                                                    map(data => new fromVales.LoadValesSalidaAreaSuccess(data['vales'])),
                                                    catchError(
                                                        error => {
                                                            return of(new fromVales.LoadValesSalidaAreaFail(error));
                                                        }
                                                    )
                                                );
                                        })
                                    );

}
