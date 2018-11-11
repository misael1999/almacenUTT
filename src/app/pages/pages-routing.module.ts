import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IngresarComponent } from './facturas/ingresar/ingresar.component';
import { ListaProveedorComponent } from './mantenimiento/proveedor/lista/lista-proveedores.component';
import { ListaProductosComponent } from './mantenimiento/producto/lista-productos/lista-productos.component';


// Guards





const pagesRoutes: Routes = [
    {
        path: 'inicio',
        component: DashboardComponent,
        // canActivate: [ VerificaTokenGuard ],
        data: { titulo: 'Inicio' }
    },
    {path: 'lista-facturas', component: IngresarComponent, data: { titulo: 'Lista de facturas' } },
    {path: 'lista-proveedores', component: ListaProveedorComponent, data: { titulo: 'Lista de proveedores' } },
    {path: 'lista-productos', component: ListaProductosComponent, data: { titulo: 'Lista de productos' } },
    // Mantenimientos
    // {
    //     path: 'usuarios',
    //     component: UsuariosComponent,
    //     canActivate: [ AdminGuard ],
    //     data: { titulo: 'Mantenimiento de Usuarios' }
    // },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
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
