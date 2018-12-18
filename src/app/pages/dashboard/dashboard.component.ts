import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import * as fromDashboard from '../../store/actions';
import { Producto } from '../../models/Producto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  info: any;
  loading: boolean;
  loaded: boolean;
  productos: Producto[] = [];

  constructor(private store: Store<AppState>) {
      this.store.dispatch(new fromDashboard.LoadInfo());
      this.store.select('dashboard')
        .subscribe(dashbaord => {
          this.info = dashbaord.info;
          this.loaded = dashbaord.loaded;
          this.loading = dashbaord.loading;
          if (this.info != null) {
            this.productos = this.info.productosRecientes.content;
          }
        });
   }

  ngOnInit() {
  }

}
