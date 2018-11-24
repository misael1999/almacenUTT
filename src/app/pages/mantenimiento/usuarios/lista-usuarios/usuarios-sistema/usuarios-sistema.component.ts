import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import * as fromUsuarios from '../../../../../store/actions';

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

  constructor(private store: Store<AppState>) {
    this.store.select('usuarios').subscribe(usuarios => {
      this.usuarios = usuarios.usuarios;
      this.loaded = usuarios.loaded;
      this.loading = usuarios.loading;
      this.error = usuarios.error;
    });
   }

  ngOnInit() {
    // this.store.dispatch(new fromUsuarios.LoadUsuarios());
  }

  public ordenaridUsuario() {
    this.usuarios.sort((a, b) => {
      const nameA = a.idUsuario;
      const nameB = b.idUsuario;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    console.log(this.usuarios);
  }

}
