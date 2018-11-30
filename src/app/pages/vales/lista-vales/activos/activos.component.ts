import { Component, OnInit } from '@angular/core';
import { ValeSalida } from 'src/app/models/ValeSalida';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import * as fromVales from 'src/app/store/actions';

@Component({
  selector: 'app-activos',
  templateUrl: './activos.component.html',
  styleUrls: []
})
export class ActivosComponent implements OnInit {

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
    this.store.dispatch(new fromVales.LoadValesSalidaActivos());
  }

  ngOnInit() {
  }

}
