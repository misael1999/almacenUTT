import { Component, OnInit } from '@angular/core';
import { Factura } from '../../../../models/Factura';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromFacturas from '../../../../store/actions';
import { Mensaje } from 'src/app/models/Mensaje';
import { Router } from '@angular/router';
declare function init_upload();
@Component({
  selector: 'app-cargar-factura',
  templateUrl: './cargar-factura.component.html',
  styles: []
})
export class CargarFacturaComponent implements OnInit {

  facturas: Factura[];
  facturaE: Factura;
  loading: boolean;
  loaded: boolean;
  pageable: any;
  private archivoSeleccionado: File;

  constructor(private store: Store<AppState>, private router: Router) {
      this.store
        .subscribe(resp => {
          this.facturas = resp.facturas.facturas;
          this.loading = resp.facturas.loading;
          this.loaded = resp.facturas.loaded;
          this.pageable = resp.facturas.pageable;
          if (resp.factura.mensaje != null) {
            setTimeout(() => {
              this.router.navigate(['/facturas', this.facturaE.folio]);
            }, 1000);
          }

        });
        this.store.dispatch(new fromFacturas.LoadFacturasEntregadas(0));

   }

  ngOnInit() {
    init_upload();
  }

  elegirFactura(factura: Factura) {
    this.facturaE = factura;
  }

  seleccionarArchivo(event) {
    this.archivoSeleccionado = event.target.files[0];
  }

  buscarFactura(termino: string) {
    if (termino.length === 0) {
      this.store.dispatch(new fromFacturas.LoadFacturasEntregadas(0));
    }
    this.store.dispatch(new fromFacturas.SearchFacturas(termino));
  }

  subirArchivo() {

    if (this.archivoSeleccionado === null || this.archivoSeleccionado === undefined) {
      this.store.dispatch(new fromFacturas.UiMessageError(new Mensaje(null, 'Debes de seleccionar un archivo')));
      return;
    }

    if (this.facturaE == null || this.facturaE === undefined) {
        this.store.dispatch(new fromFacturas.UiMessageError(new Mensaje(null, 'Debes de seleccionar una factura')));
        return;
      }

    this.store.dispatch(new fromFacturas.UploadArchivoFactura(this.archivoSeleccionado, this.facturaE.folio));
  }

}
