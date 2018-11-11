import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProveedorService, LoginService, ModalProveedorService } from 'src/app/services/service.index';
import { Proveedor } from '../../../../models/Proveedor';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromProveedor from '../../../../store/actions';
import { Usuario } from 'src/app/models/usuario';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista-proveedores.component.html',
  styles: []
})
export class ListaProveedorComponent implements OnInit {

  // formProveedor: FormGroup;
  // usuario: Usuario;
  loading: boolean;
  error: any;
  loaded: boolean;
  proveedores: Proveedor[];

  constructor(private provedorService: ProveedorService,
    private store: Store<AppState>, private modalProveedorService: ModalProveedorService) {
      store.dispatch(new fromProveedor.LoadProveedores());
      this.store.select('proveedores')
        .subscribe(proveedores => {
          this.proveedores = proveedores.provedores;
          this.loaded = proveedores.loaded;
          this.loading = proveedores.loading;
          this.error = proveedores.error;

        });
    }

  ngOnInit() {}

  public abrirModal() {
    this.modalProveedorService.mostrarModal();
  }

}

