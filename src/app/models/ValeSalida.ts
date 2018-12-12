import {Area} from './Area';
import { ValeProducto } from './ValeProducto';
import { Factura } from './Factura';

export class ValeSalida {
    constructor(public numeroRequisicion: number,
        public area: Area,
        public items: ValeProducto[],
        public factura: Factura,
        public idValeSalida?: number,
        public fechaEntrega?: string,
        public status?: boolean,
        public idUsuario?: number ) {

    }
}

