import {Area} from './Area';

export class ValeSalida {
    constructor(public numeroRequisicion: number,
        public cantidadSolicitada: number,
        public cantidadEntregada: number,
        public unidadMedida: string,
        public descripcion: string,
        public fechaEntrega: string,
        public area: Area,
        public idValeSalida?: number,
        public status?: boolean,
        public idUsuario?: number ) {

    }
}

