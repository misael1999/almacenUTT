export class Usuario {
    constructor(
    public primerNombre: string,
    public apellidoPaterno: string,
    public apellidoMaterno: string,
    public area: Iarea,
    public rol: string,
    public nombreUsuario: string,
    public password: string,
    public id_usuario?: string,
    public estado?: boolean,
    public segundoNombre?: string,
    ) {}
}


interface Iarea {
    idArea: string;
    nombre: string;
}
