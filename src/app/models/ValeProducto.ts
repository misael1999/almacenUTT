import { Producto } from './Producto';
export class ValeProducto {

    constructor(public cantidadSolicitada: number,
                public cantidadEntregada: number,
                public unidadMedida: string,
                public producto: Producto) {}
}

