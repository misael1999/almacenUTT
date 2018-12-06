import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { ActivatedRoute } from '@angular/router';
import * as fromFactura from '../../../store/actions';
import { Factura } from '../../../models/Factura';
import { Producto } from '../../../models/Producto';
import { DownloadArchivoFactura } from '../../../store/actions/factura/factura.actions';
import { URL_SERVICIOS } from '../../../global/config';


@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styles: []
})
export class DescripcionComponent implements OnInit {

  factura: Factura;
  loading: boolean;
  loaded: boolean;
  error: any;
  productos: any[];

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params
      .subscribe(params => {
        const folio = params['folio'];
          this.store.dispatch(new fromFactura.LoadFactura(folio));
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
  }

  descargarArchivo(nombreArchivo: string) {
    window.open(URL_SERVICIOS + '/facturas/documento/' + nombreArchivo, '_blank');
  }

}
