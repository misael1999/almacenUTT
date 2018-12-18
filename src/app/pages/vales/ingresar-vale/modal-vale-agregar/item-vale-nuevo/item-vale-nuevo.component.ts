import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FacturaProducto } from '../../../../../models/FacturaProducto';
import { ValeProducto } from '../../../../../models/ValeProducto';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducer';
import * as fromVale from '../../../../../store/actions';
import { Factura } from '../../../../../models/Factura';

@Component({
  selector: 'app-item-vale-nuevo',
  templateUrl: './item-vale-nuevo.component.html',
  styles: []
})
export class ItemValeNuevoComponent implements OnInit {

  @Input() productoFactura: FacturaProducto;
  @Input() index: any;
  @Input() factura: Factura;
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
              this.factura.items = this.factura.items.filter(productoFac => {
                return productoFac.idFacturaProducto !== this.productoFactura.idFacturaProducto;
              });
          } else {
            this.factura.items.push(this.productoFactura);
          }
        });
  }
}
