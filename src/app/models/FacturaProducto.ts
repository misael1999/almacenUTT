import { Producto } from './producto';
export class FacturaProducto {
    constructor (
        public idFacturaProducto: number,
        public cantidad: number,
        public factura: any,
        public producto: Producto,
        public cantidadRestante?: number
    ) {}
}
