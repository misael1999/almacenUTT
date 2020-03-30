import { Component, OnInit, Input } from '@angular/core';
import { ModalValeAgregarService } from './modal-area.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromVale from '../../../../store/actions';
import { Factura } from '../../../../models/factura';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-vale-agregar',
  templateUrl: './modal-vale-agregar.component.html',
  styles: []
})
export class ModalValeAgregarComponent implements OnInit {

  facturas: Factura[];
  // tslint:disable-next-line:no-input-rename
  @Input('facturaVale') facturaVale: Factura;
  loading: boolean;
  loaded: boolean;
  nombrePaso = 'Elige la factura';
  paso1 = true;
  paso2 = false;
  factura: Factura;
  chkField: FormControl;
  agregado = false;


  constructor(public modalValeService: ModalValeAgregarService,
    private store: Store<AppState>) {
      this.store.
        subscribe(resp => {
          this.facturas = resp.facturas.facturas;
          this.loading = resp.facturas.loading;
          this.loaded = resp.facturas.loaded;
        });
     }

  ngOnInit() {
    this.chkField = new FormControl(this.agregado);

    this.chkField.valueChanges
        .subscribe( () => {
          this.agregado = !this.agregado;
          if (!this.agregado) {

          }
        });
  }

  cerrarModal() {
    this.modalValeService.ocultarModal();
    this.factura = null;
    this.paso1 = true;
    this.nombrePaso = 'Elige la factura';
  }


  buscarFactura(termino: string) {
    if (termino.length > 1) {
      this.store.dispatch(new fromVale.SearchFacturas(termino));
    }
  }

  irPaso2(factura: Factura) {
    this.nombrePaso = 'Elige el producto(s)';
    this.paso1 = false;
    this.paso2 = true;
    this.factura = factura;
  }



}
