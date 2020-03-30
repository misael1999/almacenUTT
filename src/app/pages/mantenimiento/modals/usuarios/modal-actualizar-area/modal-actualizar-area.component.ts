import { Component, OnInit } from '@angular/core';
import { ModalActualizarAreaService } from './modal-actualizar-area.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromArea from '../../../../../store/actions';
import { Mensaje } from 'src/app/models/mensaje';
import { Area } from '../../../../../models/area';

@Component({
  selector: 'app-modal-actualizar-area',
  templateUrl: './modal-actualizar-area.component.html',
  styles: []
})
export class ModalActualizarAreaComponent implements OnInit {
  mensaje: any;
  formArea: FormGroup;
  loading: boolean;
  loaded: boolean;
  area: Area;
  constructor(public modalActualizarAreaService: ModalActualizarAreaService,
    private store: Store<AppState>) {

    this.store.select('area')
      .subscribe(area => {
        this.mensaje = area.mensaje;
        this.loaded = area.loaded;
        this.loading = area.loading;
        this.area = area.area;

        if (this.area != null) {
          this.formArea = new FormGroup({
            nombre: new FormControl( this.area.nombre , Validators.required ),
            responsable: new FormControl( this.area.responsable, Validators.required)
          });
        }

        if (this.mensaje != null) {
          this.cerrarModal();
          this.formArea.reset();
          this.store.dispatch(new fromArea.LoadAreas());
        }
      });


   }

  ngOnInit() {

  }

  cerrarModal() {
    this.modalActualizarAreaService.ocultarModal();
  }

  actualizarArea() {
    if (this.formArea.invalid) {
        this.store.dispatch(new fromArea.UiMessageError(new Mensaje('Rellene todos los campos', 'Rellene todos los campos')));
        return;
    }

    const area = new Area(
      this.formArea.value.nombre,
      this.formArea.value.responsable,
      true,
      this.area.idArea
      );

    this.store.dispatch(new fromArea.UpdateArea(area));
  }


}
