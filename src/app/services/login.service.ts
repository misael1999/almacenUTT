import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../global/config';
import { catchError } from 'rxjs/operators';

@Injectable()
export class LoginService {
  constructor(private _http: HttpClient) {}

  public login(username: string, password: string) {
    const url = URL_SERVICIOS + '/login';
    return this._http.post(url, { username, password }).pipe(
      catchError(
        (err): any => {
          console.log(err);
        }
      )
    );
  }
}
