import { Privilegio } from './privilegio';
import { PrivilegioUsuario } from './privilegioUsuario';
export class Usuario {
    constructor(
    public nombre: string,
    public apellidoPaterno: string,
    public apellidoMaterno: string,
    public role: string,
    public nombreUsuario: string,
    public password: string,
    public idUsuario?: number,
    public status?: boolean,
    public privilegios?: PrivilegioUsuario[]
    ) {}
}

