import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import * as fromFacturas from '../../../store/actions';
import { Router } from '@angular/router';
declare function init_factura_inputs();

@Component({
  selector: 'app-lista-facturas',
  templateUrl: './lista-facturas.component.html',
  styles: []
})
export class ListaFacturasComponent implements OnInit {

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    init_factura_inputs();
  }

  buscarFactura(termino: string) {
     if (termino.length === 0) {
       this.router.navigate(['/facturas/almacen/page/1']);
    }
    this.store.dispatch(new fromFacturas.SearchFacturas(termino));
  }

}
