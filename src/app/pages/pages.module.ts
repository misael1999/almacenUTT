
import { NgModule } from '@angular/core';


import { SharedModule } from '../shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IngresarComponent } from './facturas/ingresar/ingresar.component';
import { ListaProveedorComponent } from './mantenimiento/proveedor/lista/lista-proveedores.component';
import { ListaProductosComponent } from './mantenimiento/producto/lista-productos/lista-productos.component';
import { ModalProveedorComponent } from './mantenimiento/modals/proveedor/modal-proveedor.component';
import { ListaFacturasComponent } from './facturas/lista-facturas/lista-facturas.component';
// tslint:disable-next-line:max-line-length
import { ModalProveedorActualizarComponent } from './mantenimiento/modals/proveedor/modal-proveedor-actualizar/modal-proveedor-actualizar.component';
import { SeguridadComponent } from './perfil/seguridad/seguridad.component';
import { FacturasActivasComponent } from './facturas/lista-facturas/facturas-activas/facturas-activas.component';
import { FacturasEntregadasComponent } from './facturas/lista-facturas/facturas-entregadas/facturas-entregadas.component';
import { ListaUsuariosComponent } from './mantenimiento/usuarios/lista-usuarios/lista-usuarios.component';
import { DescripcionComponent } from './facturas/descripcion/descripcion.component';
import { UsuariosAreasComponent } from './mantenimiento/usuarios/lista-usuarios/usuarios-areas/usuarios-areas.component';
import { UsuariosSistemaComponent } from './mantenimiento/usuarios/lista-usuarios/usuarios-sistema/usuarios-sistema.component';
import { FacturasComponent } from './facturas/facturas.component';
import { ModalUsuarioSistemasComponent } from './mantenimiento/modals/usuarios/modal-usuario-sistemas/modal-usuario-sistemas.component';
// tslint:disable-next-line:max-line-length
import { ModalActualizarUsuarioComponent } from './mantenimiento/modals/usuarios/modal-actualizar-usuario/modal-actualizar-usuario.component';
import { CargarFacturaComponent } from './facturas/cargar-factura/cargar-factura.component';



// Pipe Module




@NgModule({
    declarations: [
        DashboardComponent,
        IngresarComponent,
        ListaProveedorComponent,
        ListaProductosComponent,
        ModalProveedorComponent,
        ListaFacturasComponent,
        ModalProveedorActualizarComponent,
        SeguridadComponent,
        FacturasActivasComponent,
        FacturasEntregadasComponent,
        ListaUsuariosComponent,
        DescripcionComponent,
        UsuariosAreasComponent,
        UsuariosSistemaComponent,
        FacturasComponent,
        ModalUsuarioSistemasComponent,
        ModalActualizarUsuarioComponent,
        CargarFacturaComponent
    ],
    exports: [
        DashboardComponent,
        IngresarComponent,
        ListaProveedorComponent,
        ListaProductosComponent,
        ModalProveedorComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        PagesRoutingModule,
        FormsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule

    ]
})
export class PagesModule { }


