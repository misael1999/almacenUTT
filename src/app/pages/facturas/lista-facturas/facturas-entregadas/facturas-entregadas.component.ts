import { Component, OnInit } from '@angular/core';
import { Factura } from '../../../../models/Factura';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromFacturas from '../../../../store/actions';
import { ActivatedRoute } from '@angular/router';

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
  pageable: any;

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) {
    this.store.select('facturas')
        .subscribe(facturas => {
          this.facturas = facturas.facturas;
          this.loading = facturas.loading;
          this.loaded = facturas.loaded;
          this.error = facturas.error;
          this.pageable = facturas.pageable;
        });

        this.activatedRoute.params
          .subscribe(params => {
            let page = params['page'];
              if (page === undefined || page < 0) {
                page = 0;
              }
              this.store.dispatch(new fromFacturas.LoadFacturasEntregadas(page - 1));
          });
   }

  ngOnInit() {
  }

}
