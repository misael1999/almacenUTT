import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as privilegiosActions from '../../actions';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsuarioService } from '../../../services/service.index';


@Injectable()
export class PrivilegiosEffects {
    constructor(private actions$: Actions, private usuarioService: UsuarioService) {}

    @Effect()
    loadPrivilegios$ = this.actions$.ofType(privilegiosActions.LOAD_PRIVILEGIOS)
        .pipe(
            mergeMap(action => {
                return this.usuarioService.getPrivilegios()
                    .pipe(
                       map(data => {
                            return new privilegiosActions.LoadPrivilegiosSuccess(data['privilegios']);
                       }),
                       catchError(error => {
                            return of(new privilegiosActions.LoadPrivilegiosFail(error));
                       })
                    );
            })
        );
}
