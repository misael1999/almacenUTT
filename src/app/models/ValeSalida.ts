import {Area} from './area';
import { ValeProducto } from './valeProducto';
import { Factura } from './factura';

export class ValeSalida {
    constructor(public numeroRequisicion: number,
        public area: Area,
        public items: ValeProducto[],
        public factura: Factura,
        public fechaEntrega?: string,
        public idValeSalida?: number,
        public status?: boolean,
        public idUsuario?: number,
        public documento?: string) {

    }
}

