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

  constructor() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
   }

  ngOnInit() {
  }

}
