import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
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
        const errorAuth = resp.auth.error;

        // this.error = (errorProveedor != null) ? errorProveedor : null;
        // this.error = (errorFactura != null) ? errorFactura : errorProveedor;
        // this.error = (errorAuth != null) ? errorAuth.error : errorFactura;

        if (errorFactura != null) {
          this.error = errorFactura;
        } else if (errorAuth != null) {
          this.error = errorAuth.error;
        } else if (errorProveedor != null) {
          this.error = errorProveedor;
        }

        if (this.error != null) {
            this.oculto = '';
            setTimeout(() => {
                this.cerrarMensaje();
            }, 4000);
        }
    });

   }

  ngOnInit() {
  }

  cerrarMensaje() {
    this.oculto = 'oculto fadeOutDown';
    this.store.dispatch(new fromMensajes.CreateProveedorEnd());
    this.store.dispatch(new fromMensajes.CreateFacturaEnd());
    this.store.dispatch(new fromMensajes.LoginUserEnd());
  }

}
