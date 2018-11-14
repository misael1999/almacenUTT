import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Proveedor } from '../../../models/Proveedor';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromFactura from '../../../store/actions';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html'
})
export class IngresarComponent implements OnInit {

  proveedores: Proveedor[];

  @ViewChild('txtProveedor') txtProveedor: ElementRef;

  constructor(private store: Store<AppState>) {
      this.store.dispatch(new fromFactura.LoadProveedores());


      this.store.select('proveedores')
        .subscribe(proveedores => {
          this.proveedores = proveedores.provedores;
      });

   }

  ngOnInit() {
  }

  colocarText(nombre: string) {
    this.txtProveedor.nativeElement.value = nombre;
    this.proveedores = null;
  }

}
