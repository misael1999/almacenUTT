import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Area } from 'src/app/models/Area';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as fromVales from 'src/app/store/actions';
import { Factura } from '../../../models/Factura';
import { ValeProducto } from '../../../models/ValeProducto';
import { Mensaje } from 'src/app/models/Mensaje';
import { ValeSalida } from '../../../models/ValeSalida';



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
  paso1 = true;
  paso2: boolean;
  paso3: boolean;
  valesProductos: ValeProducto[] = [];
  areaSeleccionada: Area;
  numeroRequisicion: number;
  idVale: number;

  constructor(private store: Store<AppState>, private router: Router) {
    this.store.dispatch(new fromVales.LoadFacturasActivas(0, 'desc'));
    this.store.dispatch(new fromVales.LoadAreas());
    this.store.subscribe(
      resp => {
        this.areas = resp.areas.areas;
        this.loading = resp.vale.loading;
        this.facturas = resp.facturas.facturas;
        this.valesProductos = resp.vales.valeProductos;
        this.idVale = resp.vale.idValeSalida;
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
  }

  buscarFactura(termino: string) {
    if (termino.length === 0) {
      this.store.dispatch(new fromVales.LoadFacturasActivas(0, 'desc'));
    }
    this.store.dispatch(new fromVales.SearchFacturas(termino));
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
      this.factura
      );
    this.store.dispatch(new fromVales.CreateValeSalida(valeSalida));
  }

  irPaso1() {
    this.paso2 = false;
    this.paso3 = false;
    this.paso1 = true;
  }
  irPaso2() {

    if (this.factura === null || this.factura === undefined) {
      this.store.dispatch(new fromVales.UiMessageError(new Mensaje(null, 'Necesitas seleccionar una factura')));
      return;
    }

    this.paso1 = false;
    this.paso3 = false;
    this.paso2 = true;

  }
  irPaso3() {

    if (this.factura === null || this.factura === undefined) {
      this.store.dispatch(new fromVales.UiMessageError(new Mensaje(null, 'Necesitas seleccionar una factura')));
      return;
    }

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

}
