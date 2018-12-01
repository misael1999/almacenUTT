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
import { CargarFacturaComponent } from './facturas/cargar-factura/cargar-factura.component';
import { ListaValesComponent } from './vales/lista-vales/lista-vales.component';
import { ActivosComponent } from './vales/lista-vales/activos/activos.component';
import { EntregadosComponent } from './vales/lista-vales/entregados/entregados.component';
import { IngresarValeComponent } from './vales/ingresar-vale/ingresar-vale.component';
import { DescripcionValeComponent } from './vales/descripcion-vale/descripcion-vale.component';



// Guards

const LIST_FACTURAS_ROUTES: Routes = [
  { path: 'entregadas', component: FacturasEntregadasComponent, data: {titulo: 'Facturas'} },
  { path: 'almacen', component: FacturasActivasComponent, data: {titulo: 'Facturas'} },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

const LIST_USUARIOS_ROUTES: Routes = [
  { path: 'area', component: UsuariosAreasComponent, data: {titulo: 'Usuarios'} },
  { path: 'sistema', component: UsuariosSistemaComponent, data: {titulo: 'Usuarios'} },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

const LIST_VALES_SALIDA_ROUTES: Routes = [
  {path: 'activados', component: ActivosComponent, data: {titulo: 'Vales de salida'}},
  {path: 'entregados', component: EntregadosComponent, data: { titulo: 'Vale de salida' }},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];




const pagesRoutes: Routes = [
    {
        path: 'inicio',
        component: DashboardComponent,
        // canActivate: [ VerificaTokenGuard ],
        data: { titulo: 'Inicio' }
    },
    {path: 'facturas-ingresar', component: IngresarComponent, data: { titulo: 'Ingresar factura' } },
    {path: 'facturas', component: ListaFacturasComponent, children: LIST_FACTURAS_ROUTES , data: { titulo: 'Lista de facturas' } },
    {path: 'proveedores', component: ListaProveedorComponent, data: { titulo: 'Lista de proveedores' } },
    {path: 'proveedores/page/:page', component: ListaProveedorComponent, data: { titulo: 'Lista de proveedores' } },
    {path: 'productos', component: ListaProductosComponent, data: { titulo: 'Lista de productos' } },
    {path: 'seguridad', component: SeguridadComponent, data: { titulo: 'Seguridad' } },
    {path: 'facturas/:folio', component: DescripcionComponent, data: { titulo: 'Descripcion' } },
    {path: 'usuarios', component: ListaUsuariosComponent, children: LIST_USUARIOS_ROUTES, data: { titulo: 'Lista de usuarios' } },
    {path: 'cargar-factura', component: CargarFacturaComponent, data: { titulo: 'Cargar factura' } },
    {path: 'vales', component: ListaValesComponent, children: LIST_VALES_SALIDA_ROUTES, data: { titulo: 'Lista vales de salida' }},
    {path: 'vales-ingresar', component: IngresarValeComponent, data: { titulo: 'Generar vale de salida'}},
    {path: 'vales/:numero', component: DescripcionValeComponent, data: {titulo: 'Descripcion vale de salida'}},
    // Mantenimientos
    // {
    //     path: 'usuarios',
    //     component: UsuariosComponent,
    //     canActivate: [ AdminGuard ],
    //     data: { titulo: 'Mantenimiento de Usuarios' }
    // },
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
