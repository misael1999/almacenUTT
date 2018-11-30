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

    console.log(this.productos);
  }

  public ordenarDescripcion() {
    this.productos.sort((a, b) => {
      const idA = a.descripcion.toLowerCase;
      const idB = b.descripcion.toLowerCase;
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }
      return 0;
    });

    console.log(this.productos);
  }

  public ordenarPiezas() {
    this.productos.sort((a, b) => {
      const idA = a.cantidad.toLowerCase;
      const idB = b.cantidad.toLowerCase;
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }
      return 0;
    });

    console.log(this.productos);
  }

  public ordenarUnidad() {
    this.productos.sort((a, b) => {
      const idA = a.unidad.toLowerCase;
      const idB = b.unidad.toLowerCase;
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }
      return 0;
    });

    console.log(this.productos);
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

    console.log(this.productos);
  }
}
