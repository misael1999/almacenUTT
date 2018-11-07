export class Usuario {

    primerNombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    area: Iarea;
    rol: string;
    nombreUsuario: string;
    id_usuario?: string;
    estado?: boolean;
    segundoNombre?: string;

    constructor(obj: Iusuario, area: Iarea) {
        // si existe OBJ y tiene la propiedad nombre se le asigna y si no es null
        this.primerNombre = obj && obj.primerNombre || null;
        this.apellidoPaterno =  obj && obj.apellidoPaterno || null;
        this.apellidoMaterno =  obj && obj.apellidoMaterno || null;
        this.area.nombre =  area && area.nombre || null;
        this.area.idArea =  area && area.idArea || null;
        this.rol =  obj && obj.rol || null;
        this.nombreUsuario =  obj && obj.nombreUsuario || null;
        // this.uid =  obj && obj.uid || null;

    }

}
interface Iusuario {
    primerNombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    area: Iarea;
    rol: string;
    nombreUsuario: string;
    id_usuario?: string;
    estado?: boolean;
    segundoNombre?: string;
}

interface Iarea {
    idArea: string;
    nombre: string;
}
