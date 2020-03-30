import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { ActivatedRoute } from '@angular/router';
import * as fromFactura from '../../../store/actions';
import { Factura } from '../../../models/factura';
import { Usuario } from '../../../models/usuario';


@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styles: []
})
export class DescripcionComponent implements OnInit, OnDestroy {

  factura: Factura;
  loading: boolean;
  loaded: boolean;
  error: any;
  productos: any[];
  usuario: Usuario;
  folio: string;

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params
      .subscribe(params => {
        this.folio = params['folio'];
          this.store.dispatch(new fromFactura.LoadFactura(this.folio));
      });

      this.store.select('factura')
        .subscribe(factura => {
          this.loading = factura.loading;
          this.loaded = factura.loaded;
          this.factura = factura.factura;
          this.error = factura.error;
          if (this.factura != null) {
            this.productos = this.factura.items;
          }
        });

  }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  ngOnDestroy() {
    this.store.dispatch(new fromFactura.LoadFacturaEnd());
  }



}
