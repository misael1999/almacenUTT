import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import { Router } from '@angular/router';
import * as fromVales from '../../../store/actions';


@Component({
  selector: 'app-lista-vales',
  templateUrl: './lista-vales.component.html',
  styleUrls: []
})
export class ListaValesComponent implements OnInit {

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
  }

  buscarVale(termino: string) {
    if (termino.length < 2) {
      this.store.dispatch(new fromVales.LoadValesSalidaActivos(0, 'asc'));
       this.router.navigate(['/vales/activos/page/1']);
       return;
    }
    this.store.dispatch(new fromVales.SearchVales(termino));
  }

}
