import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthInterceptor } from './interceptor/authInterceptor.service';

import {
  LoginService,
  ProveedorService,
  ProductoService,
  ModalProductoService,
  ModalProveedorService,
  ModalProveedorActualizarService,
  FacturaService,
  LoginGuard,
  UsuarioService,
  ValesalidaService
 } from './service.index';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    ProveedorService,
    ProductoService,
    ModalProductoService,
    ModalProveedorService,
    FacturaService,
    ModalProveedorActualizarService,
    LoginGuard,
    UsuarioService
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true,
    // },
  ],
  declarations: []
})
export class ServiceModule { }


