import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IngresarComponent } from './facturas/ingresar/ingresar.component';
import { ListaProveedorComponent } from './mantenimiento/proveedor/lista/lista-proveedores.component';
import { ListaProductosComponent } from './mantenimiento/producto/lista-productos/lista-productos.component';
import { ListaFacturasComponent } from './facturas/lista-facturas/lista-facturas.component';
import { SeguridadComponent } from './perfil/seguridad/seguridad.component';
import { FacturasActivasComponent } from './facturas/lista-facturas/facturas-activas/facturas-activas.component';
import { FacturasEntregadasComponent } from './facturas/lista-facturas/facturas-entregadas/facturas-entregadas.component';
import { DescripcionComponent } from './facturas/descripcion/descripcion.component';
import { ListaUsuariosComponent } from './mantenimiento/usuarios/lista-usuarios/lista-usuarios.component';
import { UsuariosAreasComponent } from './mantenimiento/usuarios/lista-usuarios/usuarios-areas/usuarios-areas.component';
import { UsuariosSistemaComponent } from './mantenimiento/usuarios/lista-usuarios/usuarios-sistema/usuarios-sistema.component';
import { CargarFacturaComponent } from './facturas/subida-documento/cargar-factura/cargar-factura.component';
import { ListaValesComponent } from './vales/lista-vales/lista-vales.component';
import { ActivosComponent } from './vales/lista-vales/activos/activos.component';
import { EntregadosComponent } from './vales/lista-vales/entregados/entregados.component';
import { IngresarValeComponent } from './vales/ingresar-vale/ingresar-vale.component';
import { DescripcionValeComponent } from './vales/descripcion-vale/descripcion-vale.component';
import { AdminGuard } from '../services/guards/admin.guard';
import { SubidaDocumentoComponent } from './facturas/subida-documento/subida-documento.component';
import { FacturasDocumentosComponent } from './facturas/subida-documento/facturas-documentos/facturas-documentos.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { GenerarReportesComponent } from './generar-reportes/generar-reportes.component';
import { HistorialComponent } from './historial/historial.component';
import { PrivilegiosComponent } from './mantenimiento/privilegios/privilegios.component';
import { PriveligioUsuarioComponent } from './mantenimiento/privilegios/priveligio-usuario/priveligio-usuario.component';
import { VerificaTokenGuard } from '../services/service.index';
import { EditarFacturaComponent } from './facturas/editar-factura/editar-factura.component';




// Guards

const LIST_FACTURAS_ROUTES: Routes = [
  { path: 'entregadas/page/:page', component: FacturasEntregadasComponent, data: {titulo: 'Facturas'} },
  { path: 'almacen/page/:page', component: FacturasActivasComponent, data: {titulo: 'Facturas'} },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

const LIST_SUBIDAS_DOCUMENTOS: Routes = [
  { path: 'subir', component: CargarFacturaComponent, data: {titulo: 'Subir documento'} },
  { path: 'documentos/page/:page', component: FacturasDocumentosComponent, data: {titulo: 'Documentos recientes'} },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

const LIST_VALES_SALIDA_ROUTES: Routes = [
  {path: 'activos/page/:page', component: ActivosComponent, data: {titulo: 'Vales de salida'}},
  {path: 'entregados', component: EntregadosComponent, data: { titulo: 'Vale de salida' }},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];




const pagesRoutes: Routes = [
    {
        path: 'inicio',
        component: DashboardComponent,
        canActivate: [ VerificaTokenGuard ],
        data: { titulo: 'Inicio' }
    },
    {path: 'facturas-ingresar', component: IngresarComponent, canActivate: [ VerificaTokenGuard ], data: { titulo: 'Ingresar factura' } },
    {path: 'facturas/editar/:folio', component: EditarFacturaComponent,
     canActivate: [ VerificaTokenGuard ], data: { titulo: 'Editar factura' } },
    {path: 'facturas', component: ListaFacturasComponent, children: LIST_FACTURAS_ROUTES ,
     canActivate: [ VerificaTokenGuard ], data: { titulo: 'Lista de facturas' } },
    {path: 'proveedores/page/:page', component: ListaProveedorComponent,
     canActivate: [ VerificaTokenGuard ], data: { titulo: 'Lista de proveedores' } },
    // tslint:disable-next-line:max-line-length
    {path: 'productos/page/:page', component: ListaProductosComponent, canActivate: [ VerificaTokenGuard ], data: { titulo: 'Lista de productos' } },
    {path: 'seguridad', component: SeguridadComponent, canActivate: [ VerificaTokenGuard ], data: { titulo: 'Seguridad' } },
    {path: 'estadisticas', component: EstadisticasComponent, canActivate: [ VerificaTokenGuard ], data: { titulo: 'Estadisticas' } },
    {path: 'reportes', component: GenerarReportesComponent, canActivate: [ VerificaTokenGuard ], data: { titulo: 'Reportes' } },
    {path: 'historial', component: HistorialComponent, canActivate: [ VerificaTokenGuard ], data: { titulo: 'Reportes' } },
    {path: 'facturas/:folio', component: DescripcionComponent, canActivate: [ VerificaTokenGuard ], data: { titulo: 'Descripcion' } },
    // tslint:disable-next-line:max-line-length
    {path: 'usuarios', component: UsuariosSistemaComponent, canActivate: [ AdminGuard, VerificaTokenGuard ], data: { titulo: 'Lista de usuarios' } },
    {path: 'areas', component: UsuariosAreasComponent, canActivate: [ VerificaTokenGuard ], data: { titulo: 'Lista de areas' } },
    {path: 'privilegios', component: PrivilegiosComponent, canActivate: [ VerificaTokenGuard ], data: { titulo: 'Privilegios' } },
    {path: 'privilegios/:nombreUsuario', component: PriveligioUsuarioComponent,
    canActivate: [ VerificaTokenGuard ], data: { titulo: 'Privilegios' } },
    {path: 'cargar-factura', component: SubidaDocumentoComponent, children: LIST_SUBIDAS_DOCUMENTOS,
     canActivate: [ VerificaTokenGuard ], data: { titulo: 'Cargar factura' } },
    {path: 'vales', component: ListaValesComponent, children: LIST_VALES_SALIDA_ROUTES,
     canActivate: [ VerificaTokenGuard ], data: { titulo: 'Lista vales de salida' }},
    {path: 'vales-ingresar', component: IngresarValeComponent,
     canActivate: [ VerificaTokenGuard ], data: { titulo: 'Generar vale de salida'}},
    {path: 'vales/:numero', component: DescripcionValeComponent,
     canActivate: [ VerificaTokenGuard ], data: {titulo: 'Descripcion vale de salida'}},
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];


@NgModule({
  imports: [
    RouterModule.forChild( pagesRoutes )
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
