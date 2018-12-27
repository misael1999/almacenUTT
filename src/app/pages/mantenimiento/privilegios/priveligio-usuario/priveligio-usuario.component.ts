import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import * as fromUsuarios from '../../../../store/actions';
import { LoadUsuario } from '../../../../store/actions/usuario/usuario.actions';
import { Usuario } from '../../../../models/Usuario';
import { Privilegio } from '../../../../models/Privilegio';

@Component({
  selector: 'app-priveligio-usuario',
  templateUrl: './priveligio-usuario.component.html',
  styles: []
})
export class PriveligioUsuarioComponent implements OnInit {

  usuario: Usuario;
  loading: boolean;
  loaded: boolean;
  error: any;
  privilegios: Privilegio[] = [];

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute, private router: Router) {
      this.activatedRoute.params
        .subscribe(params => {
          this.store.dispatch(new fromUsuarios.LoadPrivilegios());
          this.store.dispatch(new fromUsuarios.LoadUsuario(params['nombreUsuario']));
        });
      this.store
        .subscribe(resp => {
          this.usuario = resp.usuario.usuario;
          this.loading = resp.usuario.loading;
          this.loaded = resp.usuario.loaded;
          this.error = resp.usuario.error;
          this.privilegios = resp.privilegios.privilegios;
          if (this.privilegios !== null && this.usuario !== null && this.usuario.privilegios !== undefined) {
            this.privilegios = this.privilegios.filter(privilegio => {
                return !this.usuario.privilegios.find(privilegioUsuario => {
                    return privilegioUsuario.privilegio.idPrivilegio === privilegio.idPrivilegio;
                });
              });
          }
        });
   }

  ngOnInit() {
  }

  agregarPrivilegio(privilegio: Privilegio) {
    this.usuario.privilegios.push({privilegio: privilegio});
    this.privilegios = this.privilegios.filter(privilegioDisponible => {
      return privilegioDisponible.idPrivilegio !== privilegio.idPrivilegio;
    });

  }

  quitarPrivilegios(privilegio: Privilegio) {
    this.privilegios.push(privilegio);
    this.usuario.privilegios = this.usuario.privilegios.filter(privilegioUsuario => {
        return privilegioUsuario.privilegio.idPrivilegio !== privilegio.idPrivilegio;
    });

  }

  guardarPrivilegios() {
    this.store.dispatch(new fromUsuarios.UpdateUsuario(this.usuario));
    this.router.navigate(['/usuarios']);
  }

  agregarTodo() {
    this.privilegios.forEach(privilegio => {
      this.usuario.privilegios.push({privilegio: privilegio});
    });
    this.privilegios = [];
  }

  quitarTodo() {
    this.usuario.privilegios.forEach(privilegioUsuario => {
      this.privilegios.push(privilegioUsuario.privilegio);
    });
    this.usuario.privilegios = [];
  }

}
