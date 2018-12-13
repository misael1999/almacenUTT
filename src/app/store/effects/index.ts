import { AuthEffects } from './auth.effects';
import { ProveedorEffects } from './proveedor/proveedor.effects';
import { ProveedoresEffects } from './proveedor/proveedores.effects';
import { ProductosEffects } from './producto/productos.effects';
import { FacturaEffects } from './factura/factura.effects';
import { UsuarioEffects } from './usuario/usuario.effects';
import { FacturasEffects } from './factura/facturas.effects';
import { AreasEffects } from './usuario/areas.effects';
import { UsuariosEffects } from './usuario/usuarios.effects';
import { ValeEffects } from './vale/vale.effects';
import { ValesEffects } from './vale/vales.effects';
import { AreaEffects } from './usuario/area.effects';
import { EstadisticasEffects } from './estadistica/estadisticas.effects';
import { ReportesEffects } from './reporte/reportes.effects';
import { ProductoEffects } from './producto/producto.effects';
import { PrivilegiosEffects } from './usuario/privilegios.effects';

export const effectArreglo: any[] = [
    AuthEffects,
    ProveedorEffects,
    ProveedoresEffects,
    ProductosEffects,
    ProductoEffects,
    FacturaEffects,
    FacturasEffects,
    UsuarioEffects,
    UsuariosEffects,
    AreasEffects,
    AreaEffects,
    ValeEffects,
    ValesEffects,
    EstadisticasEffects,
    ReportesEffects,
    PrivilegiosEffects
];

export * from './auth.effects';
export * from './proveedor/proveedor.effects';
export * from './proveedor/proveedores.effects';
export * from './producto/productos.effects';
export * from './producto/producto.effects';
export * from './factura/factura.effects';
export * from './usuario/usuario.effects';
export * from './usuario/usuarios.effects';
export * from './factura/facturas.effects';
export * from './usuario/areas.effects';
export * from './usuario/area.effects';
export * from './vale/vale.effects';
export * from './vale/vales.effects';
export * from './estadistica/estadisticas.effects';
export * from './reporte/reportes.effects';
export * from './usuario/privilegios.effects';

