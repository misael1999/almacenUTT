import { Component, OnInit } from '@angular/core';
import { ModalAreaService } from './modal-area.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromArea from '../../../../../store/actions';
import { Mensaje } from 'src/app/models/mensaje';
import { Area } from '../../../../../models/area';

@Component({
  selector: 'app-modal-area',
  templateUrl: './modal-area.component.html',
  styles: []
})
export class ModalAreaComponent implements OnInit {
  mensaje: any;
  formArea: FormGroup;
  loading: boolean;
  loaded: boolean;
  constructor(public modalAreaService: ModalAreaService, private store: Store<AppState>) {

    this.store.select('area')
      .subscribe(area => {
        this.mensaje = area.mensaje;
        this.loaded = area.loaded;
        this.loading = area.loading;

        if (this.mensaje != null) {
          this.cerrarModal();
          this.formArea.reset();
          this.store.dispatch(new fromArea.LoadAreas());
        }
      });


   }

  ngOnInit() {
    this.formArea = new FormGroup({
      nombre: new FormControl( null , Validators.required ),
      responsable: new FormControl( null, Validators.required)
    });
  }

  cerrarModal() {
    this.modalAreaService.ocultarModal();
  }


  crearArea() {
    if (this.formArea.invalid) {
        this.store.dispatch(new fromArea.UiMessageError(new Mensaje('Rellene todos los campos', 'Rellene todos los campos')));
        return;
    }

    const area = new Area(
      this.formArea.value.nombre,
      this.formArea.value.responsable,
      true
      );

    this.store.dispatch(new fromArea.CreateArea(area));
  }


}
