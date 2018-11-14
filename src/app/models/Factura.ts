import { Producto } from './Producto';


export class Factura {


    constructor(
    public fechaExpedicion: Date,
    public items: Producto[],
    public idProveedor: number,
    public idUsuario: number,
    public descripcion?: string

    ) {}

}


