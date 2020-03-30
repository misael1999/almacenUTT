import { Component, OnInit } from '@angular/core';
import { Factura } from '../../../../models/factura';
import { Usuario } from '../../../../models/usuario';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { ActivatedRoute } from '@angular/router';
import * as fromFacturas from '../../../../store/actions';
import { ValeSalida } from '../../../../models/valeSalida';

@Component({
  selector: 'app-vales-documentos',
  templateUrl: './vales-documentos.component.html',
  styles: []
})
export class ValesDocumentosComponent implements OnInit {

  vales: ValeSalida[];
  loading: boolean;
  loaded: boolean;
  error: any;
  pageable: any;
  usuario: Usuario;

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.store.select('vales')
        .subscribe(vales => {
          this.vales = vales.vales;
          this.loading = vales.loading;
          this.loaded = vales.loaded;
          this.error = vales.error;
          this.pageable = vales.pageable;
        });

        this.activatedRoute.params
          .subscribe(params => {
            let page = params['page'];
              if (page === undefined || page < 0) {
                page = 0;
              }

            this.store.dispatch(new fromFacturas.LoadValeSalidaWithDocuments(page - 1));

          });
  }

  ngOnInit() {
  }

  descargar(nombreDocumento) {
    this.store.dispatch(new fromFacturas.DownloadArchivoVale(nombreDocumento));
  }

}
