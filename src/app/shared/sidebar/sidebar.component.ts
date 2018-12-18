import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { SidebarService } from '../../services/shared/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  public usuario: Usuario;
  public letraUsuario: string;
  public privilegios: any[];

  constructor(private _loginService: LoginService,
    private _router: Router, private sidebarService: SidebarService) {
    this.usuario = _loginService.usuario;
    this.privilegios = [];
    this.letraUsuario = this.usuario.nombre.charAt(0) + this.usuario.apellidoPaterno.charAt(0);
    this.usuario.privilegios.forEach(privi => {
        this.privilegios.push(privi.privilegio.nombre);
    });
   }

  ngOnInit() {}

  public logout() {
    this._loginService.logout();
  }


}
