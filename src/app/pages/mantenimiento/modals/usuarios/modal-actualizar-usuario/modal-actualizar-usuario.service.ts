import { Injectable } from '@angular/core';

@Injectable()
export class ModalActualizarUsuarioService {

  public tipo: string;
  public id: string;

  public oculto = 'oculto';


  constructor() { }

  ocultarModal() {
    this.oculto = 'oculto';
    this.tipo = null;
    this.id = null;
  }

  mostrarModal( ) {
    this.oculto = '';

  }

}
