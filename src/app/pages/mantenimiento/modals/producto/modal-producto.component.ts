import { Component, OnInit } from '@angular/core';
import { ModalProductoService } from './modal-producto.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.component.html',
  styleUrls: [ ]
})
export class ModalProductoComponent implements OnInit {

  formProducto: FormGroup;
  constructor(public modalProductoService: ModalProductoService) { }

  ngOnInit() {
  }

  public cerrarModal() {
    this.modalProductoService.ocultarModal();
  }

  public crearProducto() {
  }

}
