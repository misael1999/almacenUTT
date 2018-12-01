import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as areasActions from '../../actions';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsuarioService } from '../../../services/service.index';


@Injectable()
export class AreaEffects {
    constructor(private actions$: Actions, private areaService: UsuarioService) {}

    @Effect()
        createArea$ = this.actions$.ofType(areasActions.CREATE_AREA)
            .pipe(
                mergeMap(action => {
                    const area = action['area'];
                    return this.areaService.createArea(area)
                        .pipe(
                           map(data => {
                                return new areasActions.CreateAreaSuccess(data);
                           }),
                           catchError(error => {
                                return of(new areasActions.CreateAreaFail(error));
                           })
                        );
                })
            );
    @Effect()
        updateArea$ = this.actions$.ofType(areasActions.UPDATE_AREA)
            .pipe(
                mergeMap(action => {
                    const area = action['area'];
                    return this.areaService.actualizarArea(area)
                        .pipe(
                           map(data => {
                                return new areasActions.UpdateAreaSuccess(data);
                           }),
                           catchError(error => {
                                return of(new areasActions.UpdateAreaFail(error));
                           })
                        );
                })
            );
}

