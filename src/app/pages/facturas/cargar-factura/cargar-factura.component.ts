import { Component, OnInit } from '@angular/core';
import { Factura } from '../../../models/Factura';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromFacturas from '../../../store/actions';
import { Mensaje } from 'src/app/models/Mensaje';
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

  constructor(private store: Store<AppState>) {
      this.store.select('facturas')
        .subscribe(facturas => {
          this.facturas = facturas.facturas;
          this.loading = facturas.loading;
          this.loaded = facturas.loaded;
        });
        this.store.dispatch(new fromFacturas.LoadFacturasEntregadas(0));

   }

  ngOnInit() {
    init_upload();
  }

  elegirFactura(factura: Factura) {
    this.facturaE = factura;
  }

  subirArchivo() {
    if (this.facturaE == null || this.facturaE === undefined) {
        this.store.dispatch(new fromFacturas.UiMessageError(new Mensaje(null, 'Debes de seleccionar una factura')));
    }
  }

}
