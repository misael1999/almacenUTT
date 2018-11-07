import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/service.index';
import { Router } from '@angular/router';

declare function init_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor( public loginService: LoginService, private _router: Router ) { }

  ngOnInit() {
    init_plugins();
    this.formLogin = new FormGroup({
      username: new FormControl( null , Validators.required ),
      password: new FormControl( null , Validators.required )
    });
  }

  public login() {

    if (this.formLogin.invalid) {
      return;
    }

    const username = this.formLogin.value.username;
    const password = this.formLogin.value.password;

    this.loginService.login(username, password)
      .subscribe((resp: any) => {
        this._router.navigate(['/dashboard']);
      });

  }

}
