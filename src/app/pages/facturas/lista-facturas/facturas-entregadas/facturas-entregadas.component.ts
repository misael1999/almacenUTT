import { Component, OnInit } from '@angular/core';
import { Factura } from '../../../../models/Factura';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromFacturas from '../../../../store/actions';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../../models/Usuario';
declare function init_selectPicker();


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
  usuario: Usuario;
  orden = 'desc';

  constructor(private store: Store<AppState>,
    private activatedRoute: ActivatedRoute, private router: Router) {
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
              this.store.dispatch(new fromFacturas.LoadFacturasEntregadas((page - 1), this.orden));
          });
   }

  ngOnInit() {
    init_selectPicker();
  }

  ordenar(orden) {
    this.orden = orden;
    this.store.dispatch(new fromFacturas.LoadFacturasEntregadas(0, this.orden));
    this.router.navigate(['/facturas/entregadas/page/1']);
  }

}
