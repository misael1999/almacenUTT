import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProveedorService, ModalProveedorActualizarService, ModalProveedorService } from 'src/app/services/service.index';
import { Proveedor } from '../../../../models/Proveedor';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromProveedor from '../../../../store/actions';
import swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
declare function init_factura_inputs();

@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista-proveedores.component.html',
  styles: []
})
export class ListaProveedorComponent implements OnInit, OnDestroy {

  loading: boolean;
  error: any;
  loaded: boolean;
  proveedores: Proveedor[];
  page = 0;
  pageable: any;

  constructor(private provedorService: ProveedorService,
    private store: Store<AppState>, private modalProveedorService: ModalProveedorService,
     private modalProveedorActualizarService: ModalProveedorActualizarService, private activateRoute: ActivatedRoute) {
      this.store.select('proveedores')
        .subscribe(proveedores => {
          this.proveedores = proveedores.provedores;
          this.loaded = proveedores.loaded;
          this.loading = proveedores.loading;
          this.error = proveedores.error;
          this.pageable = proveedores.pageable;
        });

        this.activateRoute.params
          .subscribe(params => {
               this.page = params['page'];
               if (this.page === undefined || this.page < 0) {
                   this.page = 0;
               }
               this.store.dispatch(new fromProveedor.LoadProveedores((this.page - 1)));
          });

    }

  ngOnInit() {
    init_factura_inputs();
  }

  ngOnDestroy() {
    this.store.dispatch(new fromProveedor.LoadProveedoresEnd());
  }

  public abrirModal() {
    this.modalProveedorService.mostrarModal();
  }

  actualizarProveedor(proveedor: Proveedor) {
    this.store.dispatch(new fromProveedor.SelectProveedor(proveedor));
    this.modalProveedorActualizarService.mostrarModal();
  }

  buscarProveedor(termino: string) {
    this.store.dispatch(new fromProveedor.SearchProveedores(termino));
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

  public ordenarIdProveedores() {
    this.proveedores.sort((a, b) => {
      const idA = a.idProveedor;
      const idB = b.idProveedor;
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }
      return 0;
    });

  }

  public ordenarCalle() {
    this.proveedores.sort((a, b) => {
      const idA = a.calle.toLowerCase();
      const idB = b.calle.toLowerCase();
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }
      return 0;
    });

  }

  public ordenarTelefono() {
    this.proveedores.sort((a, b) => {
      const idA = a.telefono.toLowerCase();
      const idB = b.telefono.toLowerCase();
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }
      return 0;
    });

  }

  public ordenarRfc() {
    this.proveedores.sort((a, b) => {
      const idA = a.rfc.toLowerCase();
      const idB = b.rfc.toLowerCase();
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }
      return 0;
    });

  }

  public ordenarContacto() {
    this.proveedores.sort((a, b) => {
      const idA = a.contacto.toLowerCase();
      const idB = b.contacto.toLowerCase();
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }
      return 0;
    });

  }

  public ordenarCorreo() {
    this.proveedores.sort((a, b) => {
      const idA = a.correo.toLowerCase();
      const idB = b.correo.toLowerCase();
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }
      return 0;
    });

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

