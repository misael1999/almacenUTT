import { Component, OnInit } from '@angular/core';
import { Area } from '../../../../../models/Area';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromAreas from '../../../../../store/actions';
import { ModalAreaService, ModalActualizarAreaService } from '../../../../../services/service.index';
import swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios-areas',
  templateUrl: './usuarios-areas.component.html',
  styles: []
})
export class UsuariosAreasComponent implements OnInit {

  areas: Area[];
  loading: boolean;
  loaded: boolean;
  error: any;

  constructor(private store: Store<AppState>,
    private modalAreaService: ModalAreaService, private modalActualizarAreaService: ModalActualizarAreaService) {
    this.store.select('areas')
      .subscribe(areas => {
        this.areas = areas.areas;
        this.loaded = areas.loaded;
        this.loading = areas.loading;
        this.error = areas.error;
      });
   }

  ngOnInit() {
    this.store.dispatch(new fromAreas.LoadAreas());
  }

  abrirModal() {
    this.modalAreaService.mostrarModal();
  }

  actualizarArea(area: Area) {
    this.store.dispatch(new fromAreas.SelectArea(area));
    this.modalActualizarAreaService.mostrarModal();

  }

  eliminarArea(area: Area) {
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    });

    swalWithBootstrapButtons({
      title: '¿Estas seguro de eliminar a ' + area.nombre + '?',
      text: 'No se podra revertir',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminalo!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        area.status = false;
        this.store.dispatch(new fromAreas.UpdateArea(area));
      } else if (
        result.dismiss === swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons(
          'Cancelado',
          'El proveedor ' + area.nombre + ' no ha sido eliminado :)',
          'error'
        );
      }
    });
  }

  public ordenarIdArea() {
    this.areas.sort((a, b) => {
      const idA = a.idArea;
      const idB = b.idArea;
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }
      return 0;
    });

  }

  public ordenarNombre() {
    this.areas.sort((a, b) => {
      const idA = a.nombre.toLowerCase;
      const idB = b.nombre.toLowerCase;
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }
      return 0;
    });

  }

  public ordenarResponsable() {
    this.areas.sort((a, b) => {
      const idA = a.responsable.toLowerCase;
      const idB = b.responsable.toLowerCase;
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }
      return 0;
    });

  }

}
