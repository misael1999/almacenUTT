import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Proveedor } from '../../../models/Proveedor';
import { Producto } from '../../../models/Producto';
import { URL_SERVICIOS } from '../../../global/config';
import { ActivatedRoute, Router } from '@angular/router';
import * as fromFacturas from '../../../store/actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Factura } from '../../../models/Factura';
import swal from 'sweetalert2';
import { FacturaProducto } from '../../../models/FacturaProducto';
import { Mensaje } from 'src/app/models/Mensaje';
declare var $;

@Component({
  selector: 'app-editar-factura',
  templateUrl: './editar-factura.component.html',
  styles: []
})
export class EditarFacturaComponent implements OnInit {

  loading: boolean;
  loaded: boolean;
  formInformacion: FormGroup;
  formProducto: FormGroup;
  formProductoEditar: FormGroup;
  productos: FacturaProducto[] = [];
  factura: Factura;
  folio: string;
  productoEditar: FacturaProducto;
  @ViewChild('txtClave') txtClave: ElementRef;
  public url = '';
  public api = 'http';
  public params = {};
  public query = '';

  constructor(private activatedRoute: ActivatedRoute,
    private store: Store<AppState>, private router: Router) {
      this.activatedRoute.params
        .subscribe(params => {
           this.folio = params['folio'];
          this.store.dispatch(new fromFacturas.LoadFactura(this.folio));
        });

      this.store.select('factura')
        .subscribe(factura => {
            this.factura = factura.factura;
            this.loading = factura.loading;
            this.loaded = factura.loaded;
            if (factura.mensaje != null) {
              setTimeout(() => {
                this.router.navigate(['/facturas', this.folio]);
              }, 2000);
           }
            if (this.factura != null) {
              this.productos = this.factura.items;
              this.iniciarFormularioFactura();
            }
        });
   }

  ngOnInit() {

    this.formProducto = new FormGroup({
      clave: new FormControl(null, Validators.required),
      descripcionProducto: new FormControl(null, Validators.required),
      unidad: new FormControl(null, Validators.required),
      cantidad: new FormControl(null, Validators.required),
      precio: new FormControl(null)
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
      this.store.dispatch(new fromFacturas.UiMessageError(new Mensaje(null, 'Ingresa todos los campos')));
      return;
    }

    const facturaProducto = new FacturaProducto(
      null,
      this.formProducto.value.cantidad,
      producto
    );

    this.productos.push(facturaProducto);
    this.formProducto.reset();
    $('#modal-agregar-producto').modal('hide');
    // this.txtClave.nativeElement.focus();
  }

  guardarFactura() {

    if (this.formInformacion.invalid) {
      this.store.dispatch(new fromFacturas.UiMessageError(new Mensaje(null, 'Ingresa los campos obligatorios')));
      return;
    }
    const fechaExp = new Date(this.formInformacion.value.fecha);

    if (fechaExp.getFullYear() > (new Date().getFullYear() + 1)) {
      const mensaje =  new Mensaje(null, 'Fecha de expedicion invalida');
      this.store.dispatch(new fromFacturas.UiMessageError(mensaje));
      return;
    }

    if (this.productos.length === 0) {
      const mensaje =  new Mensaje(null, 'Agregue al menos un producto');
      this.store.dispatch(new fromFacturas.UiMessageError(mensaje));
      return;
    }

    const proveedor = new Proveedor(this.formInformacion.value.proveedor, 0);
    this.factura.proveedor = proveedor;
    this.factura.fechaExpedicion = this.formInformacion.value.fecha;
    this.factura.descripcion = this.formInformacion.value.descripcion;
    this.factura.items = this.productos;
    this.store.dispatch(new fromFacturas.UpdateFactura(this.factura));

  }

  buscarProveedor(termino: string) {
    this.url = URL_SERVICIOS + '/proveedores/todo/' + termino;
  }

  public handleHttpResultSelected (result) {
    this.query = result;
  }

  iniciarFormularioFactura() {
    this.formInformacion = new FormGroup({
      folio: new FormControl({value: this.factura.folio, disabled: true}),
      proveedor: new FormControl(this.factura.proveedor.nombre, Validators.required),
      fecha: new FormControl(this.factura.fechaExpedicion.slice(0, 10), Validators.required),
      descripcion: new FormControl(this.factura.descripcion)
    });
    this.query = this.factura.proveedor.nombre;

  }

  iniciarFormularioEditarProducto(facturaProducto: FacturaProducto) {
    this.productoEditar = facturaProducto;
    this.formProductoEditar = new FormGroup({
      claveE: new FormControl({value: facturaProducto.producto.clave, disabled: true }, Validators.required),
      descripcionProductoE: new FormControl(facturaProducto.producto.descripcion, Validators.required),
      unidadE: new FormControl(facturaProducto.producto.unidadMedida , Validators.required),
      cantidadE: new FormControl(facturaProducto.cantidad, Validators.required),
      precioE: new FormControl(facturaProducto.producto.precio, Validators.required)
    });
    $('#modal-editar-producto').modal('show');
  }

  actualizarProducto() {
    if (this.formProductoEditar.invalid) {
      this.store.dispatch(new fromFacturas.UiMessageError(new Mensaje(null, 'Ingresa todos los campos')));
      return;
    }
    const producto = new Producto(
      this.formProductoEditar.controls.claveE.value,
      this.formProductoEditar.value.descripcionProductoE,
      this.formProductoEditar.value.unidadE,
      this.formProductoEditar.value.cantidadE,
      this.formProductoEditar.value.precioE
    );
    const facturaProducto = new FacturaProducto(
      null,
      this.formProductoEditar.value.cantidadE,
      producto
    );

    const index = this.productos.findIndex(factuProducto => {
      return factuProducto.producto.clave === facturaProducto.producto.clave;
    });
    this.productos[index] = facturaProducto;

    $('#modal-editar-producto').modal('hide');


  }

  eliminarProducto(facturaProducto: FacturaProducto) {
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
    });

    swalWithBootstrapButtons({
      title: '¿Estas seguro?',
      text: 'No se podra revertir',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminalo!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: false
    }).then((result) => {
      if (result.value) {
        this.productos = this.productos.filter(factuProducto => {
          return factuProducto.producto.clave !== facturaProducto.producto.clave;
        });
      }
    });
  }


}
