import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../../models/Producto';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromProductos from '../../../../store/actions';
import { ActivatedRoute } from '@angular/router';
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
  page = 0;
  pageable: any;

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) {
    this.store.select('productos').subscribe(productos => {
      this.productos = productos.productos;
      this.loading = productos.loading;
      this.loaded = productos.loaded;
      this.error = productos.error;
      this.pageable = productos.pageable;
    });

    this.activatedRoute.params
      .subscribe(params => {
        this.page = params['page'];
        if (this.page === undefined || this.page < 0) {
          this.page = 0;
        }
        this.store.dispatch(new fromProductos.LoadProductos(this.page - 1));
      });
  }

  ngOnInit() {
    init_factura_inputs();
  }

  buscarProducto(termino: string) {
    if (termino.length === 0) {
      this.store.dispatch(new fromProductos.LoadProductos(this.page - 1));
      return;
    }
    this.store.dispatch(new fromProductos.SearchProductos(termino));
  }

  public ordenaridProductos() {
    this.productos.sort((a, b) => {
      const idA = a.idProducto;
      const idB = b.idProducto;
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }
      return 0;
    });

  }

  public ordenarDescripcion() {
    this.productos.sort((a, b) => {
      const idA = a.descripcion.toLowerCase();
      const idB = b.descripcion.toLowerCase();
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }
      return 0;
    });

  }

  public ordenarPiezas() {
    this.productos.sort((a, b) => {
      const idA = a.cantidad;
      const idB = b.cantidad;
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }
      return 0;
    });

  }

  public ordenarUnidad() {
    this.productos.sort((a, b) => {
      const idA = a.unidad.toLowerCase();
      const idB = b.unidad.toLowerCase();
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }
      return 0;
    });

  }

  public ordenarPrecio() {
    this.productos.sort((a, b) => {
      const idA = a.precio;
      const idB = b.precio;
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }
      return 0;
    });

  }
}
