import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthInterceptor } from './interceptor/authInterceptor.service';

import {
  LoginService,
  ProveedorService,
  ProductoService,
  ModalProveedorService,
  ModalProveedorActualizarService,
  ModalActualizarUsuarioService,
  ModalActualizarAreaService,
  ModalUsuarioService,
  FacturaService,
  LoginGuard,
  UsuarioService,
  ValesalidaService,
  ModalAreaService
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
    ModalProveedorService,
    ModalUsuarioService,
    ModalProveedorActualizarService,
    ModalActualizarUsuarioService,
    FacturaService,
    LoginGuard,
    UsuarioService,
    ValesalidaService,
    ModalAreaService,
    ModalActualizarAreaService
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true,
    // },
  ],
  declarations: []
})
export class ServiceModule { }


