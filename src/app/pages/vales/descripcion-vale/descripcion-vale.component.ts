import { Component, OnInit } from '@angular/core';
import { ValeSalida } from 'src/app/models/ValeSalida';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import * as fromVale from 'src/app/store/actions';

@Component({
  selector: 'app-descripcion-vale',
  templateUrl: './descripcion-vale.component.html'
})
export class DescripcionValeComponent implements OnInit {

  vale: ValeSalida;
  loading: boolean;
  loaded: boolean;
  error: any[];
  numeroRequision: number;
  loadingVale: boolean;

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.
      subscribe(params => {
        this.numeroRequision = params['numero'];
        this.store.dispatch(new fromVale.LoadValeSalida(this.numeroRequision));
    });

    this.store
        .subscribe(resp => {
              this.loading = resp.vale.loading;
              this.loaded = resp.vale.loaded;
              this.vale = resp.vale.vale;
              this.error = resp.vale.error;
              this.loadingVale = resp.reportes.loading;

              });
  }

  ngOnInit() {
  }


  abrirValeSalida() {
    this.store.dispatch(new fromVale.GenerateValeSalida(this.vale.idValeSalida));
  }

}
