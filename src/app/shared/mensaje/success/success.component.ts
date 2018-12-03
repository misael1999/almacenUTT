import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromMensajes from '../../../store/actions';


@Component({
  selector: 'app-alert-success',
  templateUrl: './success.component.html',
  styleUrls: ['../error/error.component.css']
})
export class SuccessComponent implements OnInit {

  mensaje: any;
  oculto = 'oculto';

  constructor(private store: Store<AppState>) {
    this.store
      .subscribe(resp => {

        this.mensaje = null;
        const mensajeFactura = resp.factura.mensaje;
        const mensajeProveedor = resp.proveedor.mensaje;
        const mensajeUsuario = resp.usuario.mensaje;
        const mensajeArea = resp.area.mensaje;
        const mensajeUi = resp.ui.mensaje;

        if (mensajeArea != null) {
          this.mensaje = mensajeArea;
          this.cerrarMensaje(new fromMensajes.CreateAreaEnd());
        }
        if (mensajeProveedor != null) {
          this.mensaje = mensajeProveedor;
          this.cerrarMensaje(new fromMensajes.CreateProveedorEnd());
        }
        if (mensajeUsuario != null) {
          this.mensaje = mensajeUsuario;
          this.cerrarMensaje(new fromMensajes.CreateUsuarioEnd());
        }
        if (mensajeFactura != null) {
          this.mensaje = mensajeFactura;
          this.cerrarMensaje(new fromMensajes.CreateFacturaEnd());
        }
        if (mensajeUi != null) {
          this.mensaje = resp.ui;
          this.cerrarMensaje(new fromMensajes.UiMessageSuccessEnd());
        }

    });
  }

  ngOnInit() {
  }

  cerrarMensaje(action: Action) {
    this.oculto = '';
    setTimeout(() => {
      this.store.dispatch(action);
      this.oculto = 'oculto';
    }, 4000);
  }

  cerrarAlerta() {
    this.oculto = 'oculto';
  }

}
