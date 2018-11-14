import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { LoginService } from '../service.index';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
   constructor(private auth: LoginService) {}

   public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       // OBTIENE EL TOKEN Y LO PASA COMO HEADER A LAS PETICIONES
       const authToken = this.auth.token;
       const authReq = req.clone({headers: req.headers.append('Authorization', 'Bearer ' + authToken)});
       return next.handle(authReq);
   }
}
