export class Producto {

constructor(

    public clave: string,
    public descripcion: string,
    public unidad: string,
    public cantidad: string,
    public precio: number,
    public idUsuario?: number,
    public estado?: number,
    public idProducto?: number,
    public fechaCreacion?: string
) {}

}

