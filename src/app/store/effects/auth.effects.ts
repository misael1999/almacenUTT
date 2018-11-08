import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as authActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { LoginService } from 'src/app/services/service.index';
import { of } from 'rxjs';


@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private loginService: LoginService) {}

    @Effect()
    login$ = this.actions$.ofType(authActions.LOGIN_USER)
        .pipe(
           switchMap( action => {
            const nombreUsuario = action['nombreUsuario'];
            const password = action['password'];
            return this.loginService.login(nombreUsuario, password)
                .pipe(
                    map(data => {
                        return new authActions.LoginUserSucess(data['usuario'], data['token']);
                    }),
                    catchError(error => {
                     return of(new authActions.LoginUserFail(error));
                    })
                );
           })
        );

}

