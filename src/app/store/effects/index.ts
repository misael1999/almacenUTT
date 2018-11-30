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

export const effectArreglo: any[] = [
    AuthEffects,
    ProveedorEffects,
    ProveedoresEffects,
    ProductosEffects,
    FacturaEffects,
    FacturasEffects,
    UsuarioEffects,
    UsuariosEffects,
    AreasEffects,
    ValeEffects,
    ValesEffects
];

export * from './auth.effects';
export * from './proveedor/proveedor.effects';
export * from './proveedor/proveedores.effects';
export * from './producto/productos.effects';
export * from './factura/factura.effects';
export * from './usuario/usuario.effects';
export * from './usuario/usuarios.effects';
export * from './factura/facturas.effects';
export * from './usuario/areas.effects';
export * from './vale/vale.effects';
export * from './vale/vales.effects';

