import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Proveedor } from '../../../models/Proveedor';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromFactura from '../../../store/actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Producto } from '../../../models/Producto';
import { Factura } from '../../../models/Factura';
import { Router } from '@angular/router';
import { Mensaje } from '../../../models/Mensaje';
import { URL_SERVICIOS } from '../../../global/config';
declare function init_factura_inputs();

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html'
})
export class IngresarComponent implements OnInit {

  loading: boolean;
  formInformacion: FormGroup;
  formProducto: FormGroup;
  productos: any = [];
  folio: string;
  errorFormulario = '';
  proveedor: Proveedor = new Proveedor(' ', 1);
  @ViewChild('txtClave') txtClave: ElementRef;
  @ViewChild('txtCantidad') txtCantidad: ElementRef;
  @ViewChild('txtPrecio') txtPrecio: ElementRef;
  public url = '';
  public api = 'http';
  public params = {};
  public query = '';

  @ViewChild('txtProveedor') txtProveedor: ElementRef;

  constructor(private store: Store<AppState>, private router: Router) {

      this.store
        .subscribe(resp => {
          this.loading = resp.factura.loading;
           if (resp.factura.mensaje != null) {
             setTimeout(() => {
               this.router.navigate(['/facturas', resp.factura.mensaje.folio]);
             }, 1500);
          }
      });

   }

   // ----  INICIAR LOS FORMULARIOS   ---- //
  ngOnInit() {
    init_factura_inputs();
    const date = new Date();
    const mes = (date.getMonth() + 1 < 10) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    const dia = (date.getDate() < 10) ? '0' + (date.getDate()) : date.getDate();
    const fechaHoy = date.getFullYear() + '-' + mes + '-' + dia;
    this.formInformacion = new FormGroup({
      folio: new FormControl(null, Validators.required),
      proveedor: new FormControl(null),
      fecha: new FormControl(fechaHoy, Validators.required),
      descripcion: new FormControl(null)
    });

    this.formProducto = new FormGroup({
      clave: new FormControl(null, Validators.required),
      descripcionProducto: new FormControl(null, Validators.required),
      unidad: new FormControl(null, Validators.required),
      cantidad: new FormControl(null, Validators.required),
      precio: new FormControl(null)
    });
  }


  eliminarProducto(producto: Producto) {
    this.productos = this.productos.filter((p) => {
      return producto.clave !== p.producto.clave;
    });
  }


  agregarProducto() {
    const producto = new Producto(
      this.formProducto.value.clave,
      this.formProducto.value.descripcionProducto,
      this.formProducto.value.unidad,
      this.formProducto.value.cantidad,
      this.formProducto.value.precio
    );
      // ----  VALIDAR FORMULARIO DE PRODUCTOS   ---- //
    if (this.formProducto.invalid) {
      return;
    }

    this.productos.push({producto: producto, cantidad: this.formProducto.value.cantidad});
    this.formProducto.reset();
    this.txtClave.nativeElement.focus();
  }

  guardarFactura() {
    const fechaExp = new Date(this.formInformacion.value.fecha);
    // ----  VALIDAMOS QUE EL FORMULARIO ESTE COMPLETO   ---- //
    if (this.formInformacion.invalid) {
        const mensaje =  new Mensaje(null, 'Ingrese los campos obligatorios');
        this.store.dispatch(new fromFactura.UiMessageError(mensaje));
        this.errorFormulario = 'error-campos';
        return;
    }

    if (fechaExp.getFullYear() > (new Date().getFullYear() + 1)) {
        this.txtProveedor.nativeElement.value = '';
        const mensaje =  new Mensaje(null, 'Fecha de expedicion invalida');
        this.store.dispatch(new fromFactura.UiMessageError(mensaje));
        return;
    }

    this.proveedor.nombre = this.query;


    // ----  CREAMOS UN OBJETO DE FACTURA   ---- //
    const factura = new Factura(
      this.formInformacion.value.folio,
      this.formInformacion.value.fecha,
      this.productos,
      this.proveedor,
      1,
      this.formInformacion.value.descripcion
    );

    // ----  MANDAMOS LA ACCION DE CREAR FACTURA   ---- //
    this.store.dispatch(new fromFactura.CreateFactura(factura));

  }

  buscarProveedor(termino: string) {
    this.url = URL_SERVICIOS + '/proveedores/todo/' + termino;
  }

  public handleHttpResultSelected (result) {
    this.query = result;
  }

  verificar(cantidad) {
    if (Number(cantidad) <= 0) {
      this.txtCantidad.nativeElement.value = 1;
    }
  }

  verificarPrecio(precio) {
    if (Number(precio) <= 0) {
      this.txtPrecio.nativeElement.value = 1;
    }
  }

}
