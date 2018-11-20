import { Component, OnInit } from '@angular/core';
import { Area } from '../../../../../models/Area';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromAreas from '../../../../../store/actions';

@Component({
  selector: 'app-usuarios-areas',
  templateUrl: './usuarios-areas.component.html',
  styles: []
})
export class UsuariosAreasComponent implements OnInit {

  areas: Area[];
  loading: boolean;
  loaded: boolean;
  error: any;

  constructor(private store: Store<AppState>) {
    this.store.select('areas')
      .subscribe(areas => {
        this.areas = areas.areas;
        this.loaded = areas.loaded;
        this.loading = areas.loading;
        this.error = areas.error;
      });
   }

  ngOnInit() {
    this.store.dispatch(new fromAreas.LoadAreas());
  }

}
