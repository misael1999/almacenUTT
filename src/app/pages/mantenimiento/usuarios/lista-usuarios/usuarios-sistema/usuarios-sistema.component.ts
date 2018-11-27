import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-sistema',
  templateUrl: './usuarios-sistema.component.html',
  styles: []
})
export class UsuariosSistemaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
<<<<<<< HEAD
    //  this.store.dispatch(new fromUsuarios.LoadUsuarios());
  }

  public ordenaridUsuario() {
    this.usuarios.sort((a, b) => {
      const nameA = a.idUsuario;
      const nameB = b.idUsuario;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    console.log(this.usuarios);
=======
>>>>>>> f866b324ca0a6e6aae0e5fe13f6623f212f492a9
  }

}
