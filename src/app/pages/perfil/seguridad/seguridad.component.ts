import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as fromUsuarios from '../../../store/actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
declare function init_factura_inputs();
@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styles: []
})
export class SeguridadComponent implements OnInit {

  formPassword: FormGroup;
  loading: boolean;

  constructor(private store: Store<AppState>) {
    this.store.select('usuario').subscribe(usuario => {
    this.loading = usuario.loading;
      if (usuario.mensaje != null) {
        this.formPassword.reset();
      }
    });
   }



  ngOnInit() {
    init_factura_inputs();

    this.formPassword = new FormGroup({
      passwordAnterior: new FormControl( null , Validators.required),
      passwordNueva: new FormControl( null , [Validators.required, Validators.minLength(8)]),
      passwordRepetir: new FormControl( null , Validators.required )
    }, {validators: this.sonIguales('passwordNueva', 'passwordRepetir')});

  }

  cambiarPassword() {

    if (this.formPassword.invalid) {
      return;
    }

    const passwordAnterior = this.formPassword.value.passwordAnterior;
    const passwordNueva = this.formPassword.value.passwordNueva;

    this.store.dispatch(new fromUsuarios.ChangePassword(passwordAnterior, passwordNueva));


  }

  sonIguales( campo1: string, campo2: string ) {

    return ( group1: FormGroup ) => {

      const pass1 = group1.controls[campo1].value;
      const pass2 = group1.controls[campo2].value;

      if ( pass1 === pass2 ) {
        return null;
      }

      return {
        sonIguales: true
      };

    };

  }
}
