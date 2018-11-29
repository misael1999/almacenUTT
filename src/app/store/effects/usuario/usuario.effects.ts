import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as usuariosActions from '../../actions';
import { map, catchError, mergeMap } from 'rxjs/operators';
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
    @Effect()
        createUsuario$ = this.actions$.ofType(usuariosActions.CREATE_USUARIO)
            .pipe(
                mergeMap(action => {
                    const usuario = action['usuario'];
                    return this.usuarioService.createUsuario(usuario)
                        .pipe(
                           map(data => {
                                return new usuariosActions.CreateUsuarioSuccess(data);
                           }),
                           catchError(error => {
                                return of(new usuariosActions.CreateUsuarioFail(error));
                           })
                        );
                })
            );
    @Effect()
        updateUsuario$ = this.actions$.ofType(usuariosActions.UPDATE_USUARIO)
            .pipe(
                mergeMap(action => {
                    const usuario = action['usuario'];
                    return this.usuarioService.actualizarUsuario(usuario)
                        .pipe(
                           map(data => {
                                return new usuariosActions.UpdateUsuarioSuccess(data);
                           }),
                           catchError(error => {
                                return of(new usuariosActions.UpdateUsuarioFail(error));
                           })
                        );
                })
            );
}

