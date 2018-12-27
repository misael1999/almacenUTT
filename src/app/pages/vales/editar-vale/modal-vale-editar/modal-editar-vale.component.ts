import { Component, OnInit, Input } from '@angular/core';
import { ModalValeAgregarService } from '../../../../services/service.index';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromVale from '../../../../store/actions';
import { Factura } from '../../../../models/Factura';
import { FormControl } from '@angular/forms';
import { ValeSalida } from '../../../../models/ValeSalida';

@Component({
  selector: 'app-modal-editar-vale',
  templateUrl: './modal-editar-vale.component.html',
  styles: []
})
export class ModalEditarValeComponent implements OnInit {

  facturas: Factura[];
  // tslint:disable-next-line:no-input-rename
  @Input('vale') vale: ValeSalida;
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

  guardar() {
    this.cerrarModal();
  }

  cerrarModal() {
    this.modalValeService.ocultarModal();
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

  anteriorPaso() {
    this.paso1 = true;
    this.paso2 = false;
    this.nombrePaso = 'Elige la factura';

  }



}
