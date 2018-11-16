import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as usuariosActions from '../../actions';
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsuarioService } from '../../../services/service.index';


@Injectable()
export class UsuarioEffects {
    constructor(private actions$: Actions, private usuarioService: UsuarioService) {}

    @Effect()
    changePassword$ = this.actions$.ofType(usuariosActions.CHANGE_PASSWORD)
        .pipe(
            mergeMap(action => {
                const passwordAnterior = action['passwordAnterior'];
                const passwordNueva = action['passwordNueva'];
                return this.usuarioService.cambiarPassword(passwordAnterior, passwordNueva)
                    .pipe(
                       map(data => {
                            return new usuariosActions.ChangePasswordSuccess(data);
                       }),
                       catchError(error => {
                            return of(new usuariosActions.ChangePasswordFail(error));
                       })
                    );
            })
        );
}

