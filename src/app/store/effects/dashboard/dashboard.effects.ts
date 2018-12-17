import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as fromDashboard from '../../actions';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { EstadisticaService } from 'src/app/services/service.index';
import { of } from 'rxjs';


@Injectable()
export class DashboardEffects {
    constructor(private actions$: Actions, private estadisticaService: EstadisticaService) {}

    @Effect()
    loadInfoDashboard$ = this.actions$.ofType(fromDashboard.LOAD_INFO)
        .pipe(
            mergeMap(action => {
                return this.estadisticaService.getInfoDashboard()
                    .pipe(
                       map(data => {
                            return new fromDashboard.LoadInfoSuccess(data);
                       }),
                       catchError(error => {
                            return of(new fromDashboard.LoadInfoFail(error));
                       })
                    );
            })
        );

}
