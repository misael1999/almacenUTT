import { Component, OnInit } from '@angular/core';
import { ValeSalida } from 'src/app/models/ValeSalida';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import * as fromVales from 'src/app/store/actions';
import { ActivatedRoute, Router } from '@angular/router';
import { Area } from '../../../../models/Area';
declare function init_selectPicker();

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
  pageable: any;
  orden = 'asc';
  areas: Area[];

  constructor(private store: Store<AppState>,
    private activatedRoute: ActivatedRoute, private router: Router) {
    this.store.dispatch(new fromVales.LoadAreas());
    this.store
            .subscribe(resp => {
                this.vales = resp.vales.vales;
                this.loading = resp.vales.loading;
                this.loaded = resp.vales.loaded;
                this.error = resp.vales.error;
                this.pageable = resp.vales.pageable;
                this.areas = resp.areas.areas;
              });
    this.activatedRoute.params
              .subscribe(params => {
                let page = params['page'];
                      if (page === undefined || page < 0) {
                        page = 1;
                      }
              this.store.dispatch(new fromVales.LoadValesSalidaActivos(page, this.orden));
        });
  }

  ngOnInit() {
    init_selectPicker();
  }

  ordenar(ordenar: string) {
    this.orden = ordenar;
    this.store.dispatch(new fromVales.LoadValesSalidaActivos(0, this.orden));
    this.router.navigate(['/vales/activos/page/1']);
  }

  filtrarArea(idArea: string) {
    if (idArea === '0') {
      return;
    }
    this.store.dispatch(new fromVales.LoadValesSalidaArea(Number(idArea)));
  }

}
