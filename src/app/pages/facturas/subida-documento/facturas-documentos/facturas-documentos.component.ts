import { Component, OnInit } from '@angular/core';
import { Factura } from '../../../../models/Factura';
import { Usuario } from '../../../../models/Usuario';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { ActivatedRoute } from '@angular/router';
import * as fromFacturas from '../../../../store/actions';
import { URL_SERVICIOS } from '../../../../global/config';

@Component({
  selector: 'app-facturas-documentos',
  templateUrl: './facturas-documentos.component.html',
  styles: []
})
export class FacturasDocumentosComponent implements OnInit {

  facturas: Factura[];
  loading: boolean;
  loaded: boolean;
  error: any;
  pageable: any;
  usuario: Usuario;

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) {
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

            this.store.dispatch(new fromFacturas.LoadFacturasWithDocuments(page - 1));

          });
  }

  ngOnInit() {
  }

  descargar(nombreDocumento) {
    this.store.dispatch(new fromFacturas.DownloadArchivoFactura(nombreDocumento));
  }

}
