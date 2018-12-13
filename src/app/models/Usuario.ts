import { Privilegio } from './Privilegio';
import { PrivilegioUsuario } from './PrivilegioUsuario';
export class Usuario {
    constructor(
    public primerNombre: string,
    public apellidoPaterno: string,
    public apellidoMaterno: string,
    public role: string,
    public nombreUsuario: string,
    public password: string,
    public idUsuario?: number,
    public status?: boolean,
    public segundoNombre?: string,
    public privilegios?: PrivilegioUsuario[]
    ) {}
}

