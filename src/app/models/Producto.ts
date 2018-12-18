export class Producto {

constructor(

    public clave: string,
    public descripcion: string,
    public unidadMedida: string,
    public cantidad: number,
    public precio: number,
    public idUsuario?: number,
    public idProducto?: number,
    public fechaCreacion?: string,
    public status?: boolean
) {}

}

