import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Proveedor } from '../../../models/Proveedor';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromFactura from '../../../store/actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Producto } from '../../../models/Producto';
import { Factura } from '../../../models/Factura';
import { Router } from '@angular/router';
import { Mensaje } from '../../../models/Mensaje';
declare function init_factura_inputs();

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html'
})
export class IngresarComponent implements OnInit, OnDestroy {

  proveedores: Proveedor[];
  loading: boolean;
  formInformacion: FormGroup;
  formProducto: FormGroup;
  productos: any = [];
  folio: string;
  errorFormulario = '';
  proveedor: Proveedor;

  @ViewChild('txtProveedor') txtProveedor: ElementRef;

  constructor(private store: Store<AppState>, private router: Router) {

      this.store
        .subscribe(resp => {
          this.proveedores = resp.proveedores.provedores;
          this.loading = resp.factura.loading;
           if (resp.factura.mensaje != null) {
             setTimeout(() => {
               this.router.navigate(['/facturas', resp.factura.mensaje.folio]);
             }, 2000);
          }
      });

   }

   // ----  INICIAR LOS FORMULARIOS   ---- //
  ngOnInit() {
    init_factura_inputs();

    this.formInformacion = new FormGroup({
      folio: new FormControl(null, Validators.required),
      proveedor: new FormControl(null, Validators.required),
      fecha: new FormControl(null, Validators.required),
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

  ngOnDestroy() {
    this.store.dispatch(new fromFactura.LoadProveedoresEnd());
  }

  colocarText(proveedor: Proveedor) {
    this.txtProveedor.nativeElement.value = proveedor.nombre;
    this.proveedor = proveedor;
    this.proveedores = [];
  }

  buscarProveedor(termino: string) {
    if (termino.length < 2) {
      this.proveedores = [];
      return;
    }
    this.store.dispatch(new fromFactura.SearchProveedores(termino));
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
  }

  guardarFactura() {
    const fechaExp = new Date(this.formInformacion.value.fecha);
    // ----  VALIDAMOS QUE EL FORMULARIO ESTE COMPLETO   ---- //
    if (this.formInformacion.invalid) {
      this.txtProveedor.nativeElement.value = '';
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

    if (this.proveedor == null) {
      this.txtProveedor.nativeElement.value = '';
      this.store.dispatch(new fromFactura.UiMessageError(new Mensaje(null, 'Ingrese un proveedor valido')));
      return;
    }

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

}
