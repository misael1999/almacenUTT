import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Proveedor } from '../../../models/Proveedor';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromFactura from '../../../store/actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Producto } from '../../../models/Producto';
import { Factura } from '../../../models/Factura';
declare function init_factura_inputs();
@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html'
})
export class IngresarComponent implements OnInit {

  proveedores: Proveedor[];
  formInformacion: FormGroup;
  formProducto: FormGroup;
  productos: any = [];

  @ViewChild('txtProveedor') txtProveedor: ElementRef;

  constructor(private store: Store<AppState>) {
      this.store.dispatch(new fromFactura.LoadProveedores());


      this.store.select('proveedores')
        .subscribe(proveedores => {
          this.proveedores = proveedores.provedores;
      });

   }

  ngOnInit() {
    init_factura_inputs();

    this.formInformacion = new FormGroup({
      proveedor: new FormControl(null, Validators.required),
      fecha: new FormControl('2018-11-15', Validators.required),
      descripcion: new FormControl(null)
    });

    this.formProducto = new FormGroup({
      descripcionProducto: new FormControl(null, Validators.required),
      unidad: new FormControl(null, Validators.required),
      cantidad: new FormControl(null, Validators.required),
      precio: new FormControl(null, Validators.required)
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

    this.productos.push({producto: producto});
  }

  guardarFactura() {
    const proveedor = new Proveedor('vacio', 1);
    proveedor.idProveedor = 1;

    const factura = new Factura(
      '2018-11-09 14:22:20',
      this.productos,
      proveedor,
      1
    );
     this.store.dispatch(new fromFactura.CreateFactura(factura));

  }

}
