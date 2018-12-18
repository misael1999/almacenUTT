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
  AdminGuard,
  UsuarioService,
  ValesalidaService,
  ModalAreaService,
  SidebarService,
  EstadisticaService,
  ReporteService,
  ModalProductoService,
  VerificaTokenGuard,
  ModalValeAgregarService
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
    AdminGuard,
    UsuarioService,
    ValesalidaService,
    ModalAreaService,
    ModalActualizarAreaService,
    SidebarService,
    EstadisticaService,
    ReporteService,
    ModalProductoService,
    VerificaTokenGuard,
    ModalValeAgregarService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  declarations: []
})
export class ServiceModule { }


