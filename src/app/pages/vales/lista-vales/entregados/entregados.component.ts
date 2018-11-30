import { Component, OnInit } from '@angular/core';
import { ValeSalida } from 'src/app/models/ValeSalida';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromVales from '../../../../store/actions';

@Component({
  selector: 'app-entregados',
  templateUrl: './entregados.component.html',
  styleUrls: []
})
export class EntregadosComponent implements OnInit {
  vales: ValeSalida[];
  loading: boolean;
  loaded: boolean;
  error: any;

  constructor(private store: Store<AppState>) {
    this.store.select('vales')
            .subscribe(vales => {
              this.vales = vales.vales;
              this.loading = vales.loading;
              this.loaded = vales.loaded;
              this.error = vales.error;
            });
  }

  ngOnInit() {
    this.store.dispatch(new fromVales.LoadValesSalidaEntregados());
  }

}
