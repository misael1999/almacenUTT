import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as areasActions from '../../actions';
import { map, catchError, mergeMap } from 'rxjs/operators';
import {UsuarioService } from 'src/app/services/service.index';
import { of } from 'rxjs';


@Injectable()
export class AreasEffects {
    constructor(private actions$: Actions, private usurioService: UsuarioService) {}

    @Effect()
    loadAreas$ = this.actions$.ofType(areasActions.LOAD_AREAS)
        .pipe(
            mergeMap(action => {
                return this.usurioService.getAreas()
                    .pipe(
                       map(data => {
                            return new areasActions.LoadAreasSuccess(data['areas']);
                       }),
                       catchError(error => {
                            return of(new areasActions.LoadAreasFail(error));
                       })
                    );
            })
        );
}

