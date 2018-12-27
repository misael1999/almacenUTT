
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
import { ModalUsuarioSistemasComponent } from './mantenimiento/modals/usuarios/modal-usuario-sistemas/modal-usuario-sistemas.component';
// tslint:disable-next-line:max-line-length
import { ModalActualizarUsuarioComponent } from './mantenimiento/modals/usuarios/modal-actualizar-usuario/modal-actualizar-usuario.component';
import { ListaValesComponent } from './vales/lista-vales/lista-vales.component';
import { ActivosComponent } from './vales/lista-vales/activos/activos.component';
import { EntregadosComponent } from './vales/lista-vales/entregados/entregados.component';
import { IngresarValeComponent } from './vales/ingresar-vale/ingresar-vale.component';
import { DescripcionValeComponent } from './vales/descripcion-vale/descripcion-vale.component';
import { ModalAreaComponent } from './mantenimiento/modals/usuarios/modal-area/modal-area.component';
import { ModalActualizarAreaComponent } from './mantenimiento/modals/usuarios/modal-actualizar-area/modal-actualizar-area.component';
import { PaginatorComponent } from './mantenimiento/proveedor/lista/paginator/paginator.component';
import { PaginatorProductoComponent } from './mantenimiento/producto/lista-productos/paginator-producto/paginator-producto.component';
// tslint:disable-next-line:max-line-length
import { PaginatorFacturaActivasComponent } from './facturas/lista-facturas/facturas-activas/paginator-factura-activas/paginator-factura-activas.component';
// tslint:disable-next-line:max-line-length
import { PaginatorFacturaEntregadasComponent } from './facturas/lista-facturas/facturas-entregadas/paginator-factura-entregadas/paginator-factura-entregadas.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';

// Graficas
import { ChartsModule } from 'ng2-charts';
import { GraficaValesComponent } from './estadisticas/grafica-vales/grafica-vales.component';
import { GenerarReportesComponent } from './generar-reportes/generar-reportes.component';
import { HistorialComponent } from './historial/historial.component';
import { GraficaGastosComponent } from './estadisticas/grafica-gastos/grafica-gastos.component';
import { ModalProductoComponent } from './mantenimiento/modals/producto/modal-producto.component';
import { PaginatorValesComponent } from './vales/lista-vales/activos/paginator-vales/paginator-vales.component';
import { ValeItemComponent } from './vales/ingresar-vale/vale-item/vale-item.component';
import { PriveligioUsuarioComponent } from './mantenimiento/privilegios/priveligio-usuario/priveligio-usuario.component';
import { ReporteProductosComponent } from './generar-reportes/reporte-productos/reporte-productos.component';
import { ReporteAreasComponent } from './generar-reportes/reporte-areas/reporte-areas.component';
import { ReporteProductosProveedorComponent } from './generar-reportes/reporte-productos-proveedor/reporte-productos-proveedor.component';
import { ReporteGastosAreaComponent } from './generar-reportes/reporte-gastos-area/reporte-gastos-area.component';

import { NgxTypeaheadModule } from 'ngx-typeahead';
import { EditarFacturaComponent } from './facturas/editar-factura/editar-factura.component';
import { EditarValeComponent } from './vales/editar-vale/editar-vale.component';
import { ModalValeAgregarComponent } from './vales/ingresar-vale/modal-vale-agregar/modal-vale-agregar.component';
import { ItemValeNuevoComponent } from './vales/ingresar-vale/modal-vale-agregar/item-vale-nuevo/item-vale-nuevo.component';
import { ModalEditarValeComponent } from './vales/editar-vale/modal-vale-editar/modal-editar-vale.component';
import { ItemValeEditarComponent } from './vales/editar-vale/modal-vale-editar/item-vale-editar/item-vale-editar.component';
import { CargarValeComponent } from './vales/subida-documento/cargar-vale/cargar-vale.component';
import { SubidaDocumentoComponent } from './vales/subida-documento/subida-documento.component';
import { ValesDocumentosComponent } from './vales/subida-documento/vales-documentos/vales-documentos.component';


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
        ModalUsuarioSistemasComponent,
        ModalActualizarUsuarioComponent,
        CargarValeComponent,
        ListaValesComponent,
        ActivosComponent,
        EntregadosComponent,
        IngresarValeComponent,
        DescripcionValeComponent,
        ModalAreaComponent,
        ModalActualizarAreaComponent,
        PaginatorComponent,
        PaginatorProductoComponent,
        PaginatorFacturaActivasComponent,
        PaginatorFacturaEntregadasComponent,
        SubidaDocumentoComponent,
        ValesDocumentosComponent,
        EstadisticasComponent,
        GraficaValesComponent,
        GenerarReportesComponent,
        HistorialComponent,
        GraficaGastosComponent,
        ModalProductoComponent,
        PaginatorValesComponent,
        ValeItemComponent,
        PriveligioUsuarioComponent,
        ReporteProductosComponent,
        ReporteAreasComponent,
        ReporteProductosProveedorComponent,
        ReporteGastosAreaComponent,
        EditarFacturaComponent,
        EditarValeComponent,
        ModalValeAgregarComponent,
        ItemValeNuevoComponent,
        ModalEditarValeComponent,
        ItemValeEditarComponent
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
        PagesRoutingModule,
        FormsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ChartsModule,
        SharedModule,
        NgxTypeaheadModule
    ]
})
export class PagesModule { }


