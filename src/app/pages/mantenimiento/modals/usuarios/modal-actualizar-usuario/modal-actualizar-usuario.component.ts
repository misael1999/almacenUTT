import { Component, OnInit } from '@angular/core';
import { ModalActualizarUsuarioService } from './modal-actualizar-usuario.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as fromUsuario from '../../../../../store/actions';
import { Usuario } from '../../../../../models/Usuario';
import { Mensaje } from 'src/app/models/Mensaje';

@Component({
  selector: 'app-modal-actualizar-usuario',
  templateUrl: './modal-actualizar-usuario.component.html',
  styles: []
})
export class ModalActualizarUsuarioComponent implements OnInit {

  mensaje: any;
  formUsuario: FormGroup;
  loading: boolean;
  loaded: boolean;
  usuario: Usuario;

  constructor(public modalActualizarUsuario: ModalActualizarUsuarioService, private store: Store<AppState>) {

  this.store.select('usuario')
  .subscribe(usuario => {
    this.mensaje = usuario.mensaje;
    this.loaded = usuario.loaded;
    this.loading = usuario.loading;
    this.usuario = usuario.usuario;

    if (this.usuario != null) {
      this.formUsuario = new FormGroup({
        nombre: new FormControl( this.usuario.nombre , Validators.required ),
        apellidoPaterno: new FormControl(this.usuario.apellidoPaterno, Validators.required),
        apellidoMaterno: new FormControl( this.usuario.apellidoMaterno, Validators.required),
        role: new FormControl( this.usuario.role, Validators.required),
        nombreUsuario: new FormControl( this.usuario.nombreUsuario, Validators.required)
      });
    }

    if (this.mensaje != null) {
      this.cerrarModal();
      this.formUsuario.reset();
      this.store.dispatch(new fromUsuario.LoadUsuarios());
    }
  });


}

    ngOnInit() {}

    cerrarModal() {
    this.modalActualizarUsuario.ocultarModal();
    }

    actualizarUsuario() {
    if (this.formUsuario.invalid) {
        this.store.dispatch(new fromUsuario.UiMessageError(new Mensaje('', 'Rellene todos los campos')));
        return;
    }

    const usuario = new Usuario(
      this.formUsuario.value.nombre,
      this.formUsuario.value.apellidoPaterno,
      this.formUsuario.value.apellidoMaterno,
      this.formUsuario.value.role,
      this.formUsuario.value.nombreUsuario,
      this.usuario.password,
      this.usuario.idUsuario,
      true,
    );

    this.store.dispatch(new fromUsuario.UpdateUsuario(usuario));
    }


}

