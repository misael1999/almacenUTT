import { Producto } from './producto';
import { Proveedor } from './proveedor';


export class Factura {


    constructor(
    public folio: string,
    public fechaExpedicion: string,
    public items: any[],
    public proveedor: any,
    public idUsuario: number,
    public descripcion?: string,
    public fechaCreacion?: string,
    public total?: number,
    public documento?: string,

    ) {}

}


