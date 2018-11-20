import { Component, OnInit } from '@angular/core';
import { Factura } from '../../../../models/Factura';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromFacturas from '../../../../store/actions';

@Component({
  selector: 'app-facturas-entregadas',
  templateUrl: './facturas-entregadas.component.html',
  styles: []
})
export class FacturasEntregadasComponent implements OnInit {

  facturas: Factura[];
  loading: boolean;
  loaded: boolean;
  error: any;

  constructor(private store: Store<AppState>) {
    this.store.select('facturas')
        .subscribe(facturas => {
          this.facturas = facturas.facturas;
          this.loading = facturas.loading;
          this.loaded = facturas.loaded;
          this.error = facturas.error;
        });
    this.store.dispatch(new fromFacturas.LoadFacturasEntregadas());
   }

  ngOnInit() {
  }

}
