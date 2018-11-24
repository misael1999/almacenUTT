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

  public ordernarIdArea() {
    this.areas.sort((a, b) => {
      const nameA = a.idArea.toLowerCase();
      const nameB = b.idArea.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    console.log(this.areas);
  }

  public ordenarNombre() {
    this.areas.sort((a, b) => {
      const nameA = a.nombre.toLowerCase();
      const nameB = b.nombre.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    console.log(this.areas);
  }
  public ordenarResponsable() {
    this.areas.sort((a, b) => {
      const nameA = a.responsable.toLowerCase();
      const nameB = b.responsable.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    console.log(this.areas);
  }

}
