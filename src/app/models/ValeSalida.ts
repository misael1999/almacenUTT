import {Area} from './Area';

export class ValeSalida{
    constructor(public numeroRequisicion: number,
         public area: Area,
         public cantidadSolicitada: number,
         public cantidadEntregada: number,
         public unidadMedida: string,
         public descripcion: string,
         public fecha: Date ) {

    }
}

