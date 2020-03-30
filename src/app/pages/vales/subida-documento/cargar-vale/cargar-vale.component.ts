import { Component, OnInit } from '@angular/core';
import { Factura } from '../../../../models/factura';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromVale from '../../../../store/actions';
import { Mensaje } from 'src/app/models/mensaje';
import { Router } from '@angular/router';
import { ValeSalida } from '../../../../models/valeSalida';
declare function init_upload();
@Component({
  selector: 'app-cargar-vale',
  templateUrl: './cargar-vale.component.html',
  styles: []
})
export class CargarValeComponent implements OnInit {

  vales: ValeSalida[];
  valeE: ValeSalida;
  loading: boolean;
  loaded: boolean;
  loadingUpload: boolean;
  pageable: any;
  private archivoSeleccionado: File;

  constructor(private store: Store<AppState>, private router: Router) {
      this.store
        .subscribe(resp => {
          this.vales = resp.vales.vales;
          this.loading = resp.vales.loading;
          this.loaded = resp.vales.loaded;
          this.pageable = resp.vales.pageable;
          this.loadingUpload = resp.vale.loading;
          if (resp.vale.mensaje != null) {
            setTimeout(() => {
              this.router.navigate(['/vales', this.valeE.idValeSalida]);
            }, 1000);
          }

        });
        this.store.dispatch(new fromVale.LoadValesSalidaActivos(0, 'desc'));

   }

  ngOnInit() {
    init_upload();
  }

  elegirFactura(vale: ValeSalida) {
    this.valeE = vale;
  }

  seleccionarArchivo(event) {
    this.archivoSeleccionado = event.target.files[0];
  }

  buscarFactura(termino: string) {
    if (termino.length === 0) {
      this.store.dispatch(new fromVale.LoadValesSalidaActivos(0, 'desc'));
    }
    this.store.dispatch(new fromVale.SearchVales(termino));
  }

  subirArchivo() {

    if (this.archivoSeleccionado === null || this.archivoSeleccionado === undefined) {
      this.store.dispatch(new fromVale.UiMessageError(new Mensaje(null, 'Debes de seleccionar un archivo')));
      return;
    }

    if (this.valeE == null || this.valeE === undefined) {
        this.store.dispatch(new fromVale.UiMessageError(new Mensaje(null, 'Debes de seleccionar una factura')));
        return;
      }

    this.store.dispatch(new fromVale.UploadArchivoVale(this.archivoSeleccionado, this.valeE.idValeSalida));
  }

}
