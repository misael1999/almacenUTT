import { Component, OnInit } from '@angular/core';
import { ModalProveedorService } from './modal-proveedor.service';
import { Usuario } from '../../../../models/usuario';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Proveedor } from '../../../../models/proveedor';
import * as fromProveedor from '../../../../store/actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Mensaje } from 'src/app/models/mensaje';


@Component({
  selector: 'app-modal-proveedor',
  templateUrl: './modal-proveedor.component.html',
  styleUrls: []
})
export class ModalProveedorComponent implements OnInit {

  formProveedor: FormGroup;
  usuario: Usuario;
  loading: boolean;
  loaded: boolean;
  mensaje: any;
  error: any;

  constructor(public modalProveedorService: ModalProveedorService, private store: Store<AppState>) {

      this.store.select('proveedor')
        .subscribe(proveedor => {
          this.mensaje = proveedor.mensaje;
          this.loaded = proveedor.loaded;
          this.loading = proveedor.loading;
          this.error = proveedor.error;
          if (this.mensaje != null) {
            this.cerrarModal();
            this.formProveedor.reset();
            this.store.dispatch(new fromProveedor.LoadProveedores(0));
          }

        });
   }


  ngOnInit() {

    this.usuario = JSON.parse(localStorage.getItem('usuario'));


    this.formProveedor = new FormGroup({

      nombre: new FormControl( null , Validators.required ),
      calle: new FormControl(null),
      numeroLote: new FormControl( null),
      numeroInterior: new FormControl(null),
      colonia: new FormControl(null),
      municipio: new FormControl(null),
      estado: new FormControl( null),
      codigoPostal: new FormControl(null),
      regimenFiscal: new FormControl( null),
      telefono: new FormControl( null),
      rfc: new FormControl(null ),
      contacto: new FormControl( null ),
      correo: new FormControl( null )
    });

  }

  public cerrarModal(): void {
    this.modalProveedorService.ocultarModal();
  }

  public crearProveedor(): void {

    if (this.formProveedor.invalid) {
      this.store.dispatch(new fromProveedor.UiMessageError(new Mensaje(null, 'Ingrese los campos obligatorios')));
      return;
  }

    const proveedor = new Proveedor(
      this.formProveedor.value.nombre,
      this.usuario.idUsuario,
      this.formProveedor.value.calle,
      this.formProveedor.value.numeroLote,
      this.formProveedor.value.numeroInterior,
      this.formProveedor.value.colonia,
      this.formProveedor.value.municipio,
      this.formProveedor.value.estado,
      this.formProveedor.value.codigoPostal,
      this.formProveedor.value.regimenFiscal,
      this.formProveedor.value.telefono,
      this.formProveedor.value.rfc,
      this.formProveedor.value.contacto,
      this.formProveedor.value.correo,
    );

    this.store.dispatch(new fromProveedor.CreateProveedor(proveedor));
  }

}
