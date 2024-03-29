import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromMensajes from '../../../store/actions';
import swal from 'sweetalert2';
import { LoginService } from '../../../services/login/login.service';

@Component({
  selector: 'app-mensaje-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  error: any;
  oculto = 'oculto';

  constructor(private store: Store<AppState>, private loginService: LoginService) {

    this.store
      .subscribe(resp => {
        this.error = null;
        const errorFactura = resp.factura.error;
        const errorProductos = resp.productos.error;
        const errorProveedor = resp.proveedor.error;
        const errorUsuario = resp.usuario.error;
        const errorAuth = resp.auth.error;
        const errorUi = resp.ui.error;
        const errorArea = resp.area.error;
        const errorProducto = resp.producto.error;
        const errorVale = resp.vale.error;
        const errorReportes = resp.reportes.error;

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
        if (errorArea != null) {
            this.error = errorArea;
            this.cerrarMensaje(new fromMensajes.CreateAreaEnd());
        }
        if (errorProducto != null) {
          this.error = errorProducto;
          this.cerrarMensaje(new fromMensajes.CreateProductoEnd());
        }
        if (errorVale != null) {
          this.error = errorVale;
          this.cerrarMensaje(new fromMensajes.CreateValeSalidaEnd());
        }
        if (errorReportes != null) {
          // tslint:disable-next-line:max-line-length
          swal('Ha ocurrido un error', 'Verifique que tenga los permisos necesarios, si el problema persiste comuniquese con el administrador', 'warning');
          this.store.dispatch(new fromMensajes.LoadReportesEnd());
          return;
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

  cerrarAlerta() {
    this.oculto = 'oculto fadeOutDown';
  }

}
