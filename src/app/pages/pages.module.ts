
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
import { ModalProductoComponent } from './mantenimiento/modals/producto/modal-producto.component';
import { ListaFacturasComponent } from './facturas/lista-facturas/lista-facturas.component';
// tslint:disable-next-line:max-line-length
import { ModalProveedorActualizarComponent } from './mantenimiento/modals/proveedor/modal-proveedor-actualizar/modal-proveedor-actualizar.component';
import { SeguridadComponent } from './perfil/seguridad/seguridad.component';
import { FacturasActivasComponent } from './facturas/lista-facturas/facturas-activas/facturas-activas.component';
import { FacturasEntregadasComponent } from './facturas/lista-facturas/facturas-entregadas/facturas-entregadas.component';



// Pipe Module




@NgModule({
    declarations: [
        DashboardComponent,
        IngresarComponent,
        ListaProveedorComponent,
        ListaProductosComponent,
        ModalProveedorComponent,
        ModalProductoComponent,
        ListaFacturasComponent,
        ModalProveedorActualizarComponent,
        SeguridadComponent,
        FacturasActivasComponent,
        FacturasEntregadasComponent,
    ],
    exports: [
        DashboardComponent,
        IngresarComponent,
        ListaProveedorComponent,
        ListaProductosComponent,
        ModalProveedorComponent,
        ModalProductoComponent
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


