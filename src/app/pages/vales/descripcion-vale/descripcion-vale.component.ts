import { Component, OnInit } from '@angular/core';
import { ValeSalida } from 'src/app/models/ValeSalida';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import * as fromValeSalida from 'src/app/store/actions';

@Component({
  selector: 'app-descripcion-vale',
  templateUrl: './descripcion-vale.component.html'
})
export class DescripcionValeComponent implements OnInit {

  vale: ValeSalida;
  loading: boolean;
  loaded: boolean;
  error: any[];

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params => {
      const numero = params['numero'];
      this.store.dispatch(new fromValeSalida.LoadValeSalida(numero));
    });

    this.store.select('vale')
              .subscribe(vale => {
                this.loading = vale.loading;
                this.loaded = vale.loaded;
                this.vale = vale.vale;
                this.error = vale.error;
              });
  }

  ngOnInit() {
  }

}
