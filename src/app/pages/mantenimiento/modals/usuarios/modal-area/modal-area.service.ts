import { Injectable } from '@angular/core';

@Injectable()
export class ModalAreaService {

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
