import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as fromVale from '../../../../store/actions';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { ValeProducto } from '../../../../models/ValeProducto';

@Component({
  selector: 'app-vale-item',
  templateUrl: './vale-item.component.html',
  styles: []
})
export class ValeItemComponent implements OnInit {

  @Input() productoFactura: any;
  @Input() index: any;
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
    this.chkField = new FormControl(this.agregado);

    this.chkField.valueChanges
        .subscribe( () => {
          this.agregado = !this.agregado;
          if (!this.agregado) {
            this.store.dispatch(new fromVale.RemoveValeItem(this.productoFactura.producto.clave));
          }
        });
  }

  agregarValeProducto() {
    if (this.cantidadEntregada != null && this.cantidadSolicitada != null) {
      const valeProducto = new ValeProducto(
        Number(this.cantidadSolicitada),
        Number(this.cantidadEntregada),
        this.productoFactura.producto.unidad,
        this.productoFactura.producto
      );
      const valeExist = this.valesProductos.find((vProducto: ValeProducto) => {
          return vProducto.producto.clave === valeProducto.producto.clave;
      });

      if (valeExist !== undefined) {
        this.store.dispatch(new fromVale.RemoveValeItem(valeExist.producto.clave));
      }

        this.store.dispatch(new fromVale.AddValeItem(valeProducto));
    }
  }

}
