import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/service.index';
import { Usuario } from 'src/app/models/usuario';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  public usuario: Usuario;

  constructor(private _loginService: LoginService) {
    this.usuario = _loginService.usuario;
   }

  ngOnInit() {
  }

}
