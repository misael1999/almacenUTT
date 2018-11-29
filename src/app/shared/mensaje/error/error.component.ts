import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromMensajes from '../../../store/actions';

@Component({
  selector: 'app-mensaje-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  error: any;
  oculto = 'oculto';

  constructor(private store: Store<AppState>) {

    this.store
      .subscribe(resp => {
        this.error = null;
        const errorFactura = resp.factura.error;
        const errorProveedor = resp.proveedor.error;
        const errorUsuario = resp.usuario.error;
        const errorAuth = resp.auth.error;
        const errorUi = resp.ui.error;

        if (errorFactura != null) {
          this.error = errorFactura;
          this.cerrarMensaje(new fromMensajes.CreateFacturaEnd());
        }
        if (errorAuth != null) {
          this.error = errorAuth.error;
          this.cerrarMensaje(new fromMensajes.LoginUserEnd());
        }
        if (errorProveedor != null) {
          this.error = errorProveedor;
          this.cerrarMensaje(new fromMensajes.CreateProveedorEnd());
        }
        if (errorUsuario != null) {
          this.error = errorUsuario;
          this.cerrarMensaje(new fromMensajes.ChangePasswordEnd());
        }
        if (errorUi != null) {
            this.error = resp.ui;
            this.cerrarMensaje(new fromMensajes.UiMessageErrorEnd());
        }

    });

   }

  ngOnInit() {
  }

  cerrarMensaje(action: Action) {
    this.oculto = '';
    setTimeout(() => {
      this.store.dispatch(action);
      this.oculto = 'oculto fadeOutDown';
    }, 4000);
  }

}
