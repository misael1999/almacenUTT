import { Component, OnInit } from '@angular/core';
import { ModalUsuarioService } from './modal-usuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromUsuario from '../../../../../store/actions';
import { Mensaje } from 'src/app/models/Mensaje';
import { Usuario } from '../../../../../models/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-usuario-sistemas',
  templateUrl: './modal-usuario-sistemas.component.html',
  styles: []
})
export class ModalUsuarioSistemasComponent implements OnInit {
  mensaje: any;
  formUsuario: FormGroup;
  loading: boolean;
  loaded: boolean;
  nombreUsuario: string;
  constructor(public modalUsuarioService: ModalUsuarioService,
    private store: Store<AppState>, private router: Router) {

    this.store.select('usuario')
      .subscribe(usuario => {
        this.mensaje = usuario.mensaje;
        this.loaded = usuario.loaded;
        this.loading = usuario.loading;

        if (this.mensaje != null) {
          this.nombreUsuario = this.formUsuario.value.nombreUsuario;
          setTimeout(() => {
            this.router.navigate(['/usuarios', this.nombreUsuario ]);
            this.formUsuario.reset();
            this.cerrarModal();
          }, 1000);
        }
      });


   }

  ngOnInit() {
    this.formUsuario = new FormGroup({
      nombre: new FormControl( null , Validators.required ),
      apellidoPaterno: new FormControl(null, Validators.required),
      apellidoMaterno: new FormControl( null, Validators.required),
      role: new FormControl( null, Validators.required),
      nombreUsuario: new FormControl( null, Validators.required),
      password: new FormControl( null, Validators.required)
    });
  }

  cerrarModal() {
    this.modalUsuarioService.ocultarModal();
  }

  crearUsuario() {
    if (this.formUsuario.invalid) {
        this.store.dispatch(new fromUsuario.UiMessageError(new Mensaje('Rellene todos los campos', 'Rellene todos los campos')));
        return;
    }

    const usuario = new Usuario(
      this.formUsuario.value.nombre,
      this.formUsuario.value.apellidoPaterno,
      this.formUsuario.value.apellidoMaterno,
      this.formUsuario.value.role,
      this.formUsuario.value.nombreUsuario,
      this.formUsuario.value.password,
      null,
      true,
    );

    this.store.dispatch(new fromUsuario.CreateUsuario(usuario));
  }


}
