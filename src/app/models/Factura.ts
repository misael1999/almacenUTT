import { Producto } from './Producto';
import { Proveedor } from './Proveedor';


export class Factura {


    constructor(
    public fechaExpedicion: string,
    public items: Producto[],
    public proveedor: any,
    public idUsuario: number,
    public descripcion?: string

    ) {}

}


