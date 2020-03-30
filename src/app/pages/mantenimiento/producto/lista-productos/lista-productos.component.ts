import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../../models/producto';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromProductos from '../../../../store/actions';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../../../models/usuario';
import { ModalProductoService } from '../../../../services/service.index';
import swal from 'sweetalert2';
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
  usuario: Usuario;

  constructor(private store: Store<AppState>,
    private activatedRoute: ActivatedRoute, private modalProductoService: ModalProductoService) {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.store.select('productos')
      .subscribe(productos => {
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
          this.page = 1;
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

  actualizarProducto(producto: Producto) {
    this.store.dispatch(new fromProductos.SelectProducto(producto));
    this.modalProductoService.mostrarModal();
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

  eliminarProducto(producto: Producto) {
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    });

    swalWithBootstrapButtons({
      title: '¿Estas seguro?',
      text: 'No se podra revertir',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminalo!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        producto.status = false;
        this.store.dispatch(new fromProductos.UpdateProducto(producto));
      } else if (
        // Read more about handling dismissals
        result.dismiss === swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons(
          'Cancelado',
          'El producto ' + producto.descripcion + ' no ha sido eliminado :)',
          'error'
        );
      }
    });
  }
}
