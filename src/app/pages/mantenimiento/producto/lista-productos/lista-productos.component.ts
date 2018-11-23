import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../../models/Producto';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromProductos from '../../../../store/actions';
declare function init_factura_inputs();

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styles: []
})
export class ListaProductosComponent implements OnInit {
  productos: Producto[];
  loading: boolean;
  loaded: boolean;
  error: any;

  constructor(private store: Store<AppState>) {
    this.store.select('productos').subscribe(productos => {
      this.productos = productos.productos;
      this.loading = productos.loading;
      this.loaded = productos.loaded;
      this.error = productos.error;
    });
  }

  ngOnInit() {
    init_factura_inputs();
    this.store.dispatch(new fromProductos.LoadProductos());
  }

  buscarNombre() {
    const re = new RegExp('ab+c');
  }

  ordenarDesc() {
    this.productos.sort((a, b) => {
      const nameA = a.descripcion.toLowerCase();
      const nameB = b.descripcion.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
}
