import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as estadisticasActions from '../../actions';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { EstadisticaService } from 'src/app/services/service.index';
import { of } from 'rxjs';


@Injectable()
export class EstadisticasEffects {
    constructor(private actions$: Actions, private estadisticaService: EstadisticaService) {}

    @Effect()
    loadEstadisticasVales$ = this.actions$.ofType(estadisticasActions.LOAD_ESTADISTICAS_VALES)
        .pipe(
            mergeMap(action => {
                return this.estadisticaService.getEstadisticaVales()
                    .pipe(
                       map(data => {
                            return new estadisticasActions.LoadEstadisticasValeSuccess(data);
                       }),
                       catchError(error => {
                            return of(new estadisticasActions.LoadEstadisticasValeFail(error));
                       })
                    );
            })
        );

}
