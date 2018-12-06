import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/service.index';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import * as authActions from '../store/actions';
import { Mensaje } from '../models/Mensaje';
import { Router } from '@angular/router';

declare function init_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public loading = false;

  constructor( public loginService: LoginService,
    private store: Store<AppState>, private router: Router ) {

      this.store.select('auth')
          .subscribe(auth => {
            this.loading = auth.loading;
            if (auth.usuario != null) {
              this.router.navigate(['/inicio']);
            }
          });

   }

  ngOnInit() {
    init_plugins();
    this.formLogin = new FormGroup({
      username: new FormControl( null , Validators.required ),
      password: new FormControl( null , Validators.required )
    });

  }

  public login() {

    if (this.formLogin.invalid) {
      this.store.dispatch(new authActions.UiMessageError(new Mensaje(null, 'Ingrese el usuario y contraseña')))
      return;
    }

    const username = this.formLogin.value.username;
    const password = this.formLogin.value.password;

    this.store.dispatch(new authActions.LoginUser(username, password));
  }

}
