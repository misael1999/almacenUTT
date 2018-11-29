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
declare function init_factura_inputs();

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html'
})
export class IngresarComponent implements OnInit {

  proveedores: Proveedor[];
  loading: boolean;
  formInformacion: FormGroup;
  formProducto: FormGroup;
  productos: any = [];
  folio: string;
  errorFormulario = '';

  @ViewChild('txtProveedor') txtProveedor: ElementRef;

  constructor(private store: Store<AppState>, private router: Router) {
      this.store.dispatch(new fromFactura.LoadProveedores());


      this.store
        .subscribe(resp => {
          this.proveedores = resp.proveedores.provedores;
          this.loading = resp.factura.loading;
           if (resp.factura.mensaje != null) {
              this.router.navigate(['/facturas', resp.factura.mensaje.folio]);
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

  colocarText(nombre: string) {
    this.txtProveedor.nativeElement.value = nombre;
    this.proveedores = null;
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
    const proveedor = new Proveedor('vacio', 1);
    proveedor.idProveedor = 1;
    const fechaExp = new Date(this.formInformacion.value.fecha);
    // ----  VALIDAMOS QUE EL FORMULARIO ESTE COMPLETO   ---- //
    if (this.formInformacion.invalid) {
        const mensaje =  new Mensaje(null, 'Ingrese los campos obligatorios');
        this.store.dispatch(new fromFactura.UiMessageError(mensaje));
        this.errorFormulario = 'error-campos';
        return;
    }

    if (fechaExp.getFullYear() > (new Date().getFullYear() + 1)) {
        const mensaje =  new Mensaje(null,'Fecha de expedicion invalida');
        this.store.dispatch(new fromFactura.UiMessageError(mensaje));
        return;
    }

    // ----  CREAMOS UN OBJETO DE FACTURA   ---- //
    const factura = new Factura(
      this.formInformacion.value.folio,
      this.formInformacion.value.fecha,
      this.productos,
      proveedor,
      1,
      this.formInformacion.value.descripcion
    );
    // ----  MANDAMOS LA ACCION DE CREAR FACTURA   ---- //
    this.store.dispatch(new fromFactura.CreateFactura(factura));

  }

}
