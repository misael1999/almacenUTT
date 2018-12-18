import { Component, OnInit } from '@angular/core';
import { ModalProductoService } from './modal-producto.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Producto } from '../../../../models/Producto';
import * as fromProducto from '../../../../store/actions';
import { Mensaje } from 'src/app/models/Mensaje';


@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.component.html',
  styleUrls: [ ]
})
export class ModalProductoComponent implements OnInit {

  formProducto: FormGroup;
  producto: Producto;

  constructor(public modalProductoService: ModalProductoService,
    private store: Store<AppState>) {

      this.store.select('producto')
        .subscribe(producto => {
          this.producto = producto.producto;
          if (this.producto != null) {
            this.formProducto = new FormGroup({
              clave: new FormControl(this.producto.clave, Validators.required),
              descripcion: new FormControl( this.producto.descripcion),
              cantidad: new FormControl( this.producto.cantidad),
              unidad: new FormControl(this.producto.unidadMedida),
              precio: new FormControl( this.producto.precio),
            });
          }

          if (producto.mensaje) {
            this.modalProductoService.ocultarModal();
            this.store.dispatch(new fromProducto.LoadProductos(0));
          }
        });
    }

  ngOnInit() {
  }

  public cerrarModal() {
    this.modalProductoService.ocultarModal();
  }

  public actualizarProducto() {

    if (this.formProducto.invalid) {
      this.store.dispatch(new fromProducto.UiMessageError(new Mensaje(null, 'Ingresa los campos obligatorios')));
      return;
    }

    const producto = new Producto(
      this.formProducto.value.clave,
      this.formProducto.value.descripcion,
      this.formProducto.value.unidad,
      this.formProducto.value.cantidad,
      this.formProducto.value.precio,
      this.producto.idUsuario,
      this.producto.idProducto,
      this.producto.fechaCreacion,
      this.producto.status
    );

    this.store.dispatch(new fromProducto.UpdateProducto(producto));


  }

}
