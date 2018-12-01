import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../../models/Usuario';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromUsuarios from '../../../../../store/actions';
import { ModalUsuarioService, ModalActualizarUsuarioService } from '../../../../../services/service.index';
import swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios-sistema',
  templateUrl: './usuarios-sistema.component.html',
  styles: []
})
export class UsuariosSistemaComponent implements OnInit {

  usuarios: Usuario[];
  loading: boolean;
  loaded: boolean;
  error: any;

  constructor(private store: Store<AppState>,
    private modalUsuarioSistemaService: ModalUsuarioService,
    private modalActualizarUsuario: ModalActualizarUsuarioService) {
    this.store.select('usuarios')
    .subscribe(usuarios => {
      this.loading = usuarios.loading;
      this.loaded = usuarios.loaded;
      this.usuarios = usuarios.usuarios;
      this.error = usuarios.error;
    });
   }

  ngOnInit() {
    this.store.dispatch(new fromUsuarios.LoadUsuarios());
  }

  agregarUsuario() {
    this.modalUsuarioSistemaService.mostrarModal();
  }

  eliminarUsuario(usuario: Usuario) {
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    });

    swalWithBootstrapButtons({
      title: '¿Estas seguro de eliminar a ' + usuario.nombreUsuario + '?',
      text: 'No se podra revertir',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminalo!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        usuario.status = false;
        this.store.dispatch(new fromUsuarios.UpdateUsuario(usuario));
      } else if (
        result.dismiss === swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons(
          'Cancelado',
          'El proveedor ' + usuario.nombreUsuario + ' no ha sido eliminado :)',
          'error'
        );
      }
    });
  }

  actualizarUsuario(usuario: Usuario) {
    this.store.dispatch(new fromUsuarios.SelectUsuario(usuario));
      this.modalActualizarUsuario.mostrarModal();
  }

}
