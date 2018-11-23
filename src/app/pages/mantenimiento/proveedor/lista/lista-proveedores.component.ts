import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProveedorService, ModalProveedorActualizarService, ModalProveedorService } from 'src/app/services/service.index';
import { Proveedor } from '../../../../models/Proveedor';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromProveedor from '../../../../store/actions';
import { Usuario } from 'src/app/models/usuario';
import swal from 'sweetalert2';
declare function init_factura_inputs();

@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista-proveedores.component.html',
  styles: []
})
export class ListaProveedorComponent implements OnInit {

  // formProveedor: FormGroup;
  // usuario: Usuario;
  loading: boolean;
  error: any;
  loaded: boolean;
  proveedores: Proveedor[];

  constructor(private provedorService: ProveedorService,
    private store: Store<AppState>, private modalProveedorService: ModalProveedorService,
     private modalProveedorActualizarService: ModalProveedorActualizarService) {
      store.dispatch(new fromProveedor.LoadProveedores());
      this.store.select('proveedores')
        .subscribe(proveedores => {
          this.proveedores = proveedores.provedores;
          this.loaded = proveedores.loaded;
          this.loading = proveedores.loading;
          this.error = proveedores.error;

        });
    }

  ngOnInit() {
    init_factura_inputs();
  }

  public ordenarNombre() {
    this.proveedores.sort((a, b) => {
      const nameA = a.nombre.toLowerCase();
      const nameB = b.nombre.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  public abrirModal() {
    this.modalProveedorService.mostrarModal();
  }

  actualizarProveedor(proveedor: Proveedor) {
    this.store.dispatch(new fromProveedor.SelectProveedor(proveedor));
    this.modalProveedorActualizarService.mostrarModal();
  }

  eliminarProveedor(proveedor: Proveedor) {
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    });

    swalWithBootstrapButtons({
      title: '¿Estas seguro?',
      text: 'No se podra revertir',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminalo!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        proveedor.status = false;
        this.store.dispatch(new fromProveedor.UpdateProveedor(proveedor));
      } else if (
        // Read more about handling dismissals
        result.dismiss === swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons(
          'Cancelado',
          'El proveedor ' + proveedor.nombre + ' no ha sido eliminado :)',
          'error'
        );
      }
    });
  }

}

