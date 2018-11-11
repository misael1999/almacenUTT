import { Component, OnInit } from '@angular/core';
import { ModalProveedorService } from './modal-proveedor.service';
import { Usuario } from '../../../../models/Usuario';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Proveedor } from '../../../../models/Proveedor';
import * as fromProveedor from '../../../../store/actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import swal from 'sweetalert2';


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

  constructor(public modalProveedorService: ModalProveedorService, private store: Store<AppState>) {

      this.store.select('proveedor')
        .subscribe(proveedor => {
          this.mensaje = proveedor.mensaje;
          this.loaded = proveedor.loaded;
          this.loading = proveedor.loading;
          if (this.mensaje != null) {
            swal(this.mensaje.titulo, this.mensaje.mensaje, 'success');
            this.cerrarModal();
            this.store.dispatch(new fromProveedor.CreateProveedorEnd());
          }
        });
   }


  ngOnInit() {

    this.usuario = JSON.parse(localStorage.getItem('usuario'));


    this.formProveedor = new FormGroup({

      nombre: new FormControl( null , Validators.required ),
      calle: new FormControl( null),
      numeroLote: new FormControl( null),
      numeroInterior: new FormControl( null),
      colonia: new FormControl( null),
      municipio: new FormControl( null),
      estado: new FormControl( null),
      codigoPostal: new FormControl( null),
      regimenFiscal: new FormControl( null),
      telefono: new FormControl( null),
      rfc: new FormControl( null ),
      contacto: new FormControl( null ),
      correo: new FormControl( null )
    });

  }

  public cerrarModal() {
    this.modalProveedorService.ocultarModal();
    this.store.dispatch(new fromProveedor.LoadProveedores());
    this.store.complete();
  }

  public crearProveedor() {

    if (this.formProveedor.invalid) {
      console.log(this.formProveedor.controls);
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
