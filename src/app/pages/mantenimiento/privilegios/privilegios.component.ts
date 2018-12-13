import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { Usuario } from '../../../models/Usuario';
import * as fromUsuarios from '../../../store/actions';

@Component({
  selector: 'app-privilegios',
  templateUrl: './privilegios.component.html',
  styles: []
})
export class PrivilegiosComponent implements OnInit {

  usuarios: Usuario[];
  loading: boolean;
  loaded: boolean;
  error: any;

  constructor(private store: Store<AppState>) {

    this.store.dispatch(new fromUsuarios.LoadUsuarios());
    this.store.select('usuarios')
      .subscribe(usuarios => {
        this.usuarios = usuarios.usuarios;
        this.loading = usuarios.loading;
        this.loaded = usuarios.loaded;
        this.error = usuarios.error;
      });

  }
  ngOnInit() {
  }

}
