import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Factura } from '../../../../models/Factura';
import * as fromFacturas from '../../../../store/actions';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../../../models/Usuario';
declare function init_selectPicker();


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
  pageable: any;
  usuario: Usuario;

  constructor(private store: Store<AppState>,
    private activatedRoute: ActivatedRoute) {
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
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

            this.store.dispatch(new fromFacturas.LoadFacturasActivas(page - 1));

          });

   }

  ngOnInit() {
    init_selectPicker();
  }

}
