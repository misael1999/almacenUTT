import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Area } from 'src/app/models/area';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as fromVales from 'src/app/store/actions';
import { Factura } from '../../../models/factura';
import { ValeProducto } from '../../../models/valeProducto';
import { Mensaje } from 'src/app/models/mensaje';
import { ValeSalida } from '../../../models/valeSalida';
import { ModalValeAgregarService } from './modal-vale-agregar/modal-area.service';
import { Producto } from 'src/app/models/producto';



@Component({
  selector: 'app-ingresar-vale',
  templateUrl: './ingresar-vale.component.html',
  styleUrls: []
})
export class IngresarValeComponent implements OnInit, OnDestroy {

  areas: Area[];
  loading: boolean;
  facturas: Factura[];
  factura: Factura;
  products = [];
  productsAux = [];
  paso1 = true;
  paso2 = true;
  paso3: boolean;
  valesProductos: ValeProducto[] = [];
  areaSeleccionada: Area;
  numeroRequisicion: number;
  idVale: number;
  fechaEntrega: any;
  todo = false;

  constructor(private store: Store<AppState>, private router: Router,
    private modalValeService: ModalValeAgregarService) {
    const date = new Date();
    const mes = (date.getMonth() + 1 < 10) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    const dia = (date.getDate() < 10) ? '0' + (date.getDate()) : date.getDate();
    const fechaHoy = date.getFullYear() + '-' + mes + '-' + dia;
    this.fechaEntrega = fechaHoy;
/*     this.getAllProducts();
 */
    this.store.dispatch(new fromVales.LoadFacturasActivas(0, 'desc'));
    this.store.dispatch(new fromVales.LoadAreas());
    this.store.subscribe(
      resp => {
        this.areas = resp.areas.areas;
        this.loading = resp.vale.loading;
        this.facturas = resp.facturas.facturas;
        this.valesProductos = resp.vales.valeProductos;
        this.idVale = resp.vale.idValeSalida;

        if (this.facturas.length > 0) {
          this.mergeItemsFactura();
        }

        if (resp.vale.mensaje != null) {
          setTimeout(() => {
            this.router.navigate(['/vales', this.idVale]);
          }, 1500);
        }

      }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.store.dispatch(new fromVales.CleanValesItems());
    this.productsAux = [];
    this.products = [];
  }

  buscarFactura(termino: string) {
    if (termino.length === 0) {
      this.store.dispatch(new fromVales.LoadFacturasActivas(0, 'desc'));
    }
    this.store.dispatch(new fromVales.SearchFacturas(termino));
  }

  /* getAllProducts() {
    if (this.page === undefined || this.page < 0) {
      this.page = 1;
    }
    this.store.dispatch(new fromVales.LoadProductos(this.page - 1));
  } */

  // ======= UNIR TODOS LOS PRODUCTOS EN UN SOLO ARREGLO ========
  mergeItemsFactura() {
    if (this.facturas.length > 0 && this.products.length === 0) {
      this.facturas.forEach((factura: any) => {
        this.factura = factura;
        // ======= AGREGAMOS LA INFORMACIÓN DE CADA FACTURA AL ITEM ========
        factura.items.forEach(item => {
          item.factura = {...factura, items: []};
        });
        // ======= ANEXAMOS LOS PRODUCTOS DE CADA FACTURA A UN SOLO ARRAY ========
        this.products = this.products.concat(factura.items);
        console.log(this.products);
      });
    }
  }

  searchProduct(value: any) {
  value = value.value;
  if (this.productsAux.length === 0) {
    this.productsAux = [...this.products];
  }
  this.products = this.productsAux.filter(product => {
    // tslint:disable-next-line:triple-equals
    return product.producto.descripcion == value || product.producto.clave == value || product.factura.folio == value;
  });
  if (value == '') {
    this.products = this.productsAux;
  }

  }

  seleccionarFactura(factura: Factura) {
    this.factura = factura;
    this.paso1 = false;
    this.paso2 = true;
  }

  anterior() {
    this.factura = null;
    this.paso2 = false;
    this.paso1 = true;
  }

  siguintePaso() {
    if (this.valesProductos.length === 0) {
      this.store.dispatch(new fromVales.UiMessageError(new Mensaje(null, 'Selecciona al menos un producto')));
      return;
    }
    this.paso2 = false;
    this.paso3 = true;
  }

  volverPaso2() {
    this.paso2 = true;
    this.paso3 = false;
  }

  guardarVale() {
    if (this.areaSeleccionada === null || this.areaSeleccionada === undefined) {
      this.store.dispatch(new fromVales.UiMessageError(new Mensaje(null, 'Selecciona una area')));
      return;
    }

    if (this.numeroRequisicion === null || this.numeroRequisicion === undefined) {
      this.store.dispatch(new fromVales.UiMessageError(new Mensaje(null, 'Ingresa el numero de requisicion')));
      return;
    }
    const valeSalida = new ValeSalida(
      this.numeroRequisicion,
      this.areaSeleccionada,
      this.valesProductos,
      this.factura,
      this.fechaEntrega
    );
    this.store.dispatch(new fromVales.CreateValeSalida(valeSalida));
  }

  irPaso1() {
    this.paso2 = false;
    this.paso3 = false;
    this.paso1 = true;
  }
  irPaso2() {
    this.paso1 = false;
    this.paso3 = false;
    this.paso2 = true;
  }
  irPaso3() {
    if (this.valesProductos.length === 0) {
      this.store.dispatch(new fromVales.UiMessageError(new Mensaje(null, 'Selecciona al menos un producto')));
      return;
    }
    this.paso1 = false;
    this.paso2 = false;
    this.paso3 = true;
  }

  seleccionarArea(idArea: number) {
    if (Number(idArea) === 0) {
      this.areaSeleccionada = null;
    } else {
      const area = new Area(' ', ' ', true, Number(idArea));
      this.areaSeleccionada = area;
    }
  }

  seleccionarTodo() {
    this.todo = true;
  }

  quitarTodo() {
    this.todo = false;
  }

  abrirModal() {
    this.modalValeService.mostrarModal();
  }

}
