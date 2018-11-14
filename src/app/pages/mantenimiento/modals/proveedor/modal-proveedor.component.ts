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
            this.store.dispatch(new fromProveedor.LoadProveedores());
          }

        });
   }


  ngOnInit() {

    this.usuario = JSON.parse(localStorage.getItem('usuario'));


    this.formProveedor = new FormGroup({

      nombre: new FormControl( null , Validators.required ),
      calle: new FormControl( 'lorem'),
      numeroLote: new FormControl( '1'),
      numeroInterior: new FormControl( '1'),
      colonia: new FormControl( 'lorem'),
      municipio: new FormControl( 'lorem'),
      estado: new FormControl( 'lorem'),
      codigoPostal: new FormControl( '75251'),
      regimenFiscal: new FormControl( 'lorem'),
      telefono: new FormControl( '2384080578'),
      rfc: new FormControl( 'lorem' ),
      contacto: new FormControl( 'lorem' ),
      correo: new FormControl( 'lorem@lorem.com' )
    });

  }

  public cerrarModal(): void {
    this.modalProveedorService.ocultarModal();
  }

  public crearProveedor(): void {

    if (this.formProveedor.invalid) {
      console.log(this.formProveedor);
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
