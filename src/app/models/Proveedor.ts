export class Proveedor {
    constructor(
    public nombre: string,
    public idUsuario: number,
    public calle?: string,
    public numeroLote?: string,
    public numeroInterior?: string,
    public colonia?: string,
    public municipio?: string,
    public estado?: string,
    public codigoPostal?: string,
    public regimenFiscal?: string,
    public telefono?: string,
    public rfc?: string,
    public contacto?: string,
    public correo?: string,
    public status?: boolean,
    public idProveedor?: number,
    public fechaCreacion?: string
    ) {}
}
