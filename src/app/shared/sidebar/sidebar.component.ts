import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  public usuario: Usuario;

  constructor(private _loginService: LoginService, private _router: Router) {

    this.usuario = _loginService.usuario;
   }

  ngOnInit() {
  }

  public logout() {
    this._loginService.logout();
    this._router.navigate(['/login']);
  }

}
