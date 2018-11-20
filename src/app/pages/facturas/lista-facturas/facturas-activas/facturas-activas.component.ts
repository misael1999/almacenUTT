import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Factura } from '../../../../models/Factura';
import * as fromFacturas from '../../../../store/actions';

@Component({
  selector: 'app-facturas-activas',
  templateUrl: './facturas-activas.component.html',
  styles: []
})
export class FacturasActivasComponent implements OnInit {

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
  this.store.dispatch(new fromFacturas.LoadFacturasActivas());

   }

  ngOnInit() {
  }

}
