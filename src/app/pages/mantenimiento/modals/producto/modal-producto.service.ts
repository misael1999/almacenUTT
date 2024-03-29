import { Injectable } from '@angular/core';

@Injectable()
export class ModalProductoService {

  public tipo: string;
  public id: string;

  public oculto = 'oculto';

  // public notificacion = new EventEmitter<any>();

  constructor() { }

  ocultarModal() {
    this.oculto = 'oculto';
    this.tipo = null;
    this.id = null;
  }

  mostrarModal( ) {
    this.oculto = '';
    // this.id = id;
    // this.tipo = tipo;
  }
}
