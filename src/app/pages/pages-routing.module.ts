import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IngresarComponent } from './facturas/ingresar/ingresar.component';
import { ListaProveedorComponent } from './mantenimiento/proveedor/lista/lista-proveedores.component';
import { ListaProductosComponent } from './mantenimiento/producto/lista-productos/lista-productos.component';
import { ListaFacturasComponent } from './facturas/lista-facturas/lista-facturas.component';
import { SeguridadComponent } from './perfil/seguridad/seguridad.component';


// Guards





const pagesRoutes: Routes = [
    {
        path: 'inicio',
        component: DashboardComponent,
        // canActivate: [ VerificaTokenGuard ],
        data: { titulo: 'Inicio' }
    },
    {path: 'facturas-ingresar', component: IngresarComponent, data: { titulo: 'Ingresar factura' } },
    {path: 'facturas', component: ListaFacturasComponent, data: { titulo: 'Lista de facturas' } },
    {path: 'proveedores', component: ListaProveedorComponent, data: { titulo: 'Lista de proveedores' } },
    {path: 'productos', component: ListaProductosComponent, data: { titulo: 'Lista de productos' } },
    {path: 'seguridad', component: SeguridadComponent, data: { titulo: 'Seguridad' } },
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
