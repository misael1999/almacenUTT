import { Component, OnInit } from '@angular/core';
import { ModalProveedorActualizarService } from '../../../../../services/service.index';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Proveedor } from '../../../../../models/Proveedor';
import * as fromProveedor from '../../../../../store/actions';


@Component({
  selector: 'app-modal-proveedor-actualizar',
  templateUrl: './modal-proveedor-actualizar.component.html',
  styles: []
})
export class ModalProveedorActualizarComponent implements OnInit {

  formProveedor: FormGroup;
  loading: boolean;
  loaded: boolean;
  mensaje: any;
  error: any;
  proveedor: Proveedor;

  constructor(public modalProveedorService: ModalProveedorActualizarService, private store: Store<AppState>) {

    this.store
      .subscribe(resp => {
        this.loading = resp.proveedor.loading;
        this.proveedor = resp.proveedor.provedor;
        this.mensaje = resp.proveedor.mensaje;

        if (this.proveedor != null) {
          this.formProveedor = new FormGroup({

            nombre: new FormControl(this.proveedor.nombre, Validators.required),
            calle: new FormControl( this.proveedor.calle),
            numeroLote: new FormControl( this.proveedor.numeroLote),
            numeroInterior: new FormControl(this.proveedor.numeroInterior),
            colonia: new FormControl( this.proveedor.colonia),
            municipio: new FormControl( this.proveedor.municipio),
            estado: new FormControl( this.proveedor.estado),
            codigoPostal: new FormControl( this.proveedor.codigoPostal),
            regimenFiscal: new FormControl( this.proveedor.regimenFiscal),
            telefono: new FormControl( this.proveedor.telefono),
            rfc: new FormControl(this.proveedor.rfc),
            contacto: new FormControl( this.proveedor.contacto ),
            correo: new FormControl( this.proveedor.correo )
          });

          if (this.mensaje != null) {
            this.mensajeCreacion();
         }

        }

      });

}


ngOnInit() {

}

public cerrarModal(): void {
this.modalProveedorService.ocultarModal();
}

public actualizarProveedor(): void {

if (this.formProveedor.invalid) {
  return;
}

  this.proveedor.nombre = this.formProveedor.value.nombre;
  this.proveedor.calle = this.formProveedor.value.calle;
  this.proveedor.numeroLote = this.formProveedor.value.numeroLote;
  this.proveedor.numeroInterior = this.formProveedor.value.numeroInterior;
  this.proveedor.colonia = this.formProveedor.value.colonia;
  this.proveedor.municipio = this.formProveedor.value.municipio;
  this.proveedor.estado = this.formProveedor.value.estado;
  this.proveedor.codigoPostal = this.formProveedor.value.codigoPostal;
  this.proveedor.regimenFiscal = this.formProveedor.value.regimenFiscal;
  this.proveedor.telefono = this.formProveedor.value.telefono;
  this.proveedor.rfc = this.formProveedor.value.rfc;
  this.proveedor.correo = this.formProveedor.value.correo;
  this.proveedor.contacto = this.formProveedor.value.contacto;


this.store.dispatch(new fromProveedor.UpdateProveedor(this.proveedor));
}

  public mensajeCreacion(): void {
    this.cerrarModal();
    this.formProveedor.reset();
  }


}
