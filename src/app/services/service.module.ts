import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SidebarService,
  SharedService,
  LoginService,
  ProveedorService,
  ProductoService,
  ModalProductoService,
  ModalProveedorService,
  LoginGuard
 } from './service.index';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SidebarService,
    SharedService,
    LoginService,
    ProveedorService,
    ProductoService,
    ModalProductoService,
    ModalProveedorService,
    LoginGuard
  ],
  declarations: []
})
export class ServiceModule { }


