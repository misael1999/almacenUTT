import {Area} from './Area';
import { ValeProducto } from './ValeProducto';

export class ValeSalida {
    constructor(public numeroRequisicion: number,
        public area: Area,
        public items: ValeProducto[],
        public idValeSalida?: number,
        public fechaEntrega?: string,
        public status?: boolean,
        public idUsuario?: number ) {

    }
}

