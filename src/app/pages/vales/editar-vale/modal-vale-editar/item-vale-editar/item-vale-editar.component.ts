import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FacturaProducto } from '../../../../../models/FacturaProducto';
import { ValeProducto } from '../../../../../models/ValeProducto';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducer';
import * as fromVale from '../../../../../store/actions';
import { Factura } from '../../../../../models/Factura';
import { ValeSalida } from '../../../../../models/ValeSalida';

@Component({
  selector: 'app-item-editar-vale',
  templateUrl: './item-vale-editar.component.html',
  styles: []
})
export class ItemValeEditarComponent implements OnInit {

  @Input() productoFactura: FacturaProducto;
  @Input() index: any;
  @Input() vale: ValeSalida;
  @ViewChild('txtSolicitada') txtSolicitada: ElementRef;
  @ViewChild('txtEntregada') txtEntregada: ElementRef;
  @ViewChild('txtComprada') txtComprada: ElementRef;
  chkField: FormControl;
  agregado = false;
  cantidadSolicitada: number;
  cantidadEntregada: number;
  valesProductos: ValeProducto[] = [];

  constructor(private store: Store<AppState>) {
      this.store.select('vales')
        .subscribe(vales => {
          this.valesProductos = vales.valeProductos;
        });
   }

  ngOnInit() {
    const encontrado = this.vale.factura.items.findIndex(pf => {
      return pf.idFacturaProducto === this.productoFactura.idFacturaProducto;
    });
    if (encontrado >= 0) {
      this.agregado = true;
    }
    this.chkField = new FormControl(this.agregado);

    this.chkField.valueChanges
        .subscribe( () => {
          this.agregado = !this.agregado;

          if (!this.agregado) {
              // this.factura.items = this.factura.items.filter(productoFac => {
              //   return productoFac.idFacturaProducto !== this.productoFactura.idFacturaProducto;
              // });
          } else {
            // this.factura.items.push(this.productoFactura);
          }
        });
  }

  verificarSolicitada(cantidad) {
    if (Number(cantidad) <= 0) {
      this.txtSolicitada.nativeElement.value = 1;
    }
  }

  verificarEntregada(cantidad) {
    if (Number(cantidad) <= 0) {
      this.txtEntregada.nativeElement.value = 1;
    }
    if (cantidad > Number(this.txtComprada.nativeElement.value)) {
        this.txtEntregada.nativeElement.value = Number(this.txtComprada.nativeElement.value);
    }
  }

  agregarValeProducto() {
    if (this.cantidadEntregada != null && this.cantidadSolicitada != null) {
      const valeProducto = new ValeProducto(
        Number(this.cantidadSolicitada),
        Number(this.cantidadEntregada),
        this.productoFactura.producto.unidadMedida,
        this.productoFactura
      );
      const valeExist = this.vale.items.findIndex((vProducto: ValeProducto) => {
          return vProducto.facturaProducto.idFacturaProducto === valeProducto.facturaProducto.idFacturaProducto;
      });

      if (valeExist > 0) {
        this.vale.items[valeExist] = valeProducto;
      } else {
        this.vale.items.push(valeProducto);
      }

    }
  }

}
