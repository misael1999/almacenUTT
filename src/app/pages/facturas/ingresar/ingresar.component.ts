import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Proveedor } from '../../../models/Proveedor';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromFactura from '../../../store/actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Producto } from '../../../models/Producto';
import { Factura } from '../../../models/Factura';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
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

  @ViewChild('txtProveedor') txtProveedor: ElementRef;

  constructor(private store: Store<AppState>, private router: Router) {
      this.store.dispatch(new fromFactura.LoadProveedores());


      this.store
        .subscribe(resp => {
          this.proveedores = resp.proveedores.provedores;
          this.loading = resp.factura.loading;
          console.log(resp.factura.mensaje);
           if (resp.factura.mensaje != null) {
              this.router.navigate(['/facturas', resp.factura.mensaje.folio]);
          }
      });

   }

  ngOnInit() {
    init_factura_inputs();

    this.formInformacion = new FormGroup({
      folio: new FormControl(null, Validators.required),
      proveedor: new FormControl(null, Validators.required),
      fecha: new FormControl(null, Validators.required),
      descripcion: new FormControl(null)
    });

    this.formProducto = new FormGroup({
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
      this.formProducto.value.descripcionProducto,
      this.formProducto.value.unidad,
      this.formProducto.value.cantidad,
      this.formProducto.value.precio
    );

    if (this.formProducto.invalid) {
      return;
    }

    this.productos.push({producto});
    this.formProducto.reset();
  }

  guardarFactura() {
    const proveedor = new Proveedor('vacio', 1);
    proveedor.idProveedor = 1;

    const factura = new Factura(
      this.formInformacion.value.folio,
      this.formInformacion.value.fecha,
      this.productos,
      proveedor,
      1,
      this.formInformacion.value.descripcion
    );

    this.store.dispatch(new fromFactura.CreateFactura(factura));

  }

}
