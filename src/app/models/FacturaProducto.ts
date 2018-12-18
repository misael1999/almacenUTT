import { Producto } from './Producto';
export class FacturaProducto {
    constructor (
        public idFacturaProducto: number,
        public cantidad: number,
        public producto: Producto,
        public cantidadRestante?: number
    ) {}
}

