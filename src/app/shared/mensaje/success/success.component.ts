import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
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


        if (mensajeFactura != null) {
          this.mensaje = mensajeFactura;
        } else if (mensajeProveedor != null) {
          this.mensaje = mensajeProveedor;
        }

        if (this.mensaje != null) {
            this.oculto = '';
            console.log(this.oculto);
            setTimeout(() => {
                this.cerrarMensaje();
                console.log('entro en timeout');
            }, 4000);
        }
    });
  }

  ngOnInit() {
  }

  cerrarMensaje() {
    this.oculto = 'oculto';
    this.store.dispatch(new fromMensajes.CreateProveedorEnd());
    this.store.dispatch(new fromMensajes.CreateFacturaEnd());
    this.store.dispatch(new fromMensajes.LoginUserEnd());
  }

}
