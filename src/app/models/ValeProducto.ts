import { FacturaProducto } from './FacturaProducto';
export class ValeProducto {

    constructor(public cantidadSolicitada: number,
                public cantidadEntregada: number,
                public unidadMedida: string,
                public facturaProducto: FacturaProducto,
                public idSalidaProducto?: number) {}
}

