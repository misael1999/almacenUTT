import {Area} from './Area';
import { ValeProducto } from './ValeProducto';
import { Factura } from './Factura';

export class ValeSalida {
    constructor(public numeroRequisicion: number,
        public area: Area,
        public items: ValeProducto[],
        public factura: Factura,
        public fechaEntrega?: string,
        public idValeSalida?: number,
        public status?: boolean,
        public idUsuario?: number ) {

    }
}

