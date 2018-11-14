import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Proveedor } from '../../../../../models/Proveedor';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

@Injectable()
export class ModalProveedorActualizarService {

  public tipo: string;
  public id: number;
  public proveedor: Proveedor;
  public oculto = 'oculto';



  proveedores: Proveedor[];
  // public notificacion = new EventEmitter<any>();

  constructor() {}

  ocultarModal() {
    this.oculto = 'oculto';
    this.tipo = null;
    this.id = null;
  }

  mostrarModal() {
    this.oculto = '';
  }



}
