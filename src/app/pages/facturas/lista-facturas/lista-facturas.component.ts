import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import * as fromFacturas from '../../../store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-facturas',
  templateUrl: './lista-facturas.component.html',
  styles: []
})
export class ListaFacturasComponent implements OnInit {

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
  }

  buscarFactura(termino: string) {
     if (termino.length < 2) {
      this.store.dispatch(new fromFacturas.LoadFacturasActivas(0, 'asc'));
       this.router.navigate(['/facturas/almacen/page/1']);
       return;
    }
    this.store.dispatch(new fromFacturas.SearchFacturas(termino));
  }

}
