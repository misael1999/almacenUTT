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

  public ordenarIdArea() {
    this.areas.sort((a, b) => {
      const idA = a.idArea;
      const idB = b.idArea;
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }
      return 0;
    });

    console.log(this.areas);
  }

  public ordenarNombre() {
    this.areas.sort((a, b) => {
      const idA = a.nombre.toLowerCase;
      const idB = b.nombre.toLowerCase;
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }
      return 0;
    });

    console.log(this.areas);
  }

  public ordenarResponsable() {
    this.areas.sort((a, b) => {
      const idA = a.responsable.toLowerCase;
      const idB = b.responsable.toLowerCase;
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }
      return 0;
    });

    console.log(this.areas);
  }

}
