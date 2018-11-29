import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as usuariosActions from '../../actions';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsuarioService } from '../../../services/service.index';


@Injectable()
export class UsuariosEffects {
    constructor(private actions$: Actions, private usuarioService: UsuarioService) {}

    @Effect()
    loadUsuarios$ = this.actions$.ofType(usuariosActions.LOAD_USUARIOS)
        .pipe(
            mergeMap(action => {
                return this.usuarioService.getUsuarios()
                    .pipe(
                       map(data => {
                            return new usuariosActions.LoadUsuariosSuccess(data['usuarios']);
                       }),
                       catchError(error => {
                            return of(new usuariosActions.LoadUsuariosFail(error));
                       })
                    );
            })
        );
}
