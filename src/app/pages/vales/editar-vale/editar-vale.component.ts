import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromVale from '../../../store/actions';
import { Area } from '../../../models/Area';
import { ActivatedRoute, Router } from '@angular/router';
import { ValeSalida } from 'src/app/models/ValeSalida';
import { FacturaProducto } from '../../../models/FacturaProducto';
import { ValeProducto } from '../../../models/ValeProducto';
import swal from 'sweetalert2';
import { ModalValeAgregarService } from '../../../services/service.index';
declare var $;

@Component({
  selector: 'app-editar-vale',
  templateUrl: './editar-vale.component.html',
  styles: []
})
export class EditarValeComponent implements OnInit {


  formInformacion: FormGroup;
  areas: Area[];
  id: number;
  vale: ValeSalida;
  valeProductos: ValeProducto[];
  loading: boolean;
  loadingVale: boolean;
  loaded: boolean;
  valeProductoEditar: ValeProducto;
  formValeProductoEditar: FormGroup;


  constructor(private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private modalValeAgregar: ModalValeAgregarService, private router: Router) {
    this.store.dispatch(new fromVale.LoadAreas());
    this.activatedRoute.params
      .subscribe(params => {
        this.id = params['id'];
        this.store.dispatch(new fromVale.LoadValeSalida(this.id));
      });
    this.store
      .subscribe(resp => {
        this.areas = resp.areas.areas;
        this.vale = resp.vale.vale;
        this.loading = resp.vales.loading;
        this.loaded = resp.vales.loaded;
        this.loadingVale = resp.vale.loading;
        if (this.vale != null) {
          this.iniciarFormulario();
        }
        if (resp.vale.mensaje != null) {
            setTimeout(() => {
              this.router.navigate(['/vales', this.vale.idValeSalida]);
            }, 1500 );
        }
      });
  }

  ngOnInit() {
  }

  iniciarFormulario() {
    this.formInformacion = new FormGroup({
      requisicion: new FormControl(this.vale.numeroRequisicion, Validators.required),
      fecha: new FormControl(this.vale.fechaEntrega, Validators.required),
      area: new FormControl(this.vale.area.idArea, Validators.required),
    });
  }

  iniciarFormularioEditar() {
    this.formValeProductoEditar = new FormGroup({
      // tslint:disable-next-line:max-line-length
      descripcion: new FormControl({value: this.valeProductoEditar.facturaProducto.producto.descripcion, disabled: true}, Validators.required),
      cantidadSolicitada: new FormControl(this.valeProductoEditar.cantidadSolicitada, Validators.required),
      cantidadEntregada: new FormControl(this.valeProductoEditar.cantidadEntregada, Validators.required),
      unidadMedida: new FormControl({value: this.valeProductoEditar.unidadMedida, disabled: true}, Validators.required),
      cantidadRestante: new FormControl({value: this.valeProductoEditar.facturaProducto.cantidad, disabled: true}, Validators.required),
    });
  }

  cambioArea(idArea: number) {
    const area = new Area('aa', 'aa', true, idArea);
    this.vale.area = area;

  }

  actualizarVale() {
    this.vale.fechaEntrega = this.formInformacion.value.fecha;
    this.store.dispatch(new fromVale.UpdateValeSalida(this.vale));
  }

  eliminarValeProducto(valeProducto: ValeProducto) {
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
    });

    swalWithBootstrapButtons({
      title: '¿Estas seguro?',
      text: 'No se podra revertir',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminalo!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: false
    }).then((result) => {
      if (result.value) {
        this.vale.items = this.vale.items.filter(vProducto => {
          return vProducto.facturaProducto.idFacturaProducto !== valeProducto.facturaProducto.idFacturaProducto;
        });
      }
    });
  }

  editarValeProducto(valeProducto: ValeProducto) {
    this.valeProductoEditar = valeProducto;
    this.iniciarFormularioEditar();
    $('#modal-editar-producto').modal('show');

  }

  actualizarValeProducto() {
    const valeProducto = new ValeProducto(
      this.formValeProductoEditar.value.cantidadSolicitada,
      this.formValeProductoEditar.value.cantidadEntregada,
      this.formValeProductoEditar.value.unidadMedida,
      this.valeProductoEditar.facturaProducto,
      this.valeProductoEditar.idSalidaProducto
    );

    const valeProductoIndex = this.vale.items.findIndex(vp => {
      return vp.idSalidaProducto === this.valeProductoEditar.idSalidaProducto;
    });

    this.vale.items[valeProductoIndex] = valeProducto;
    $('#modal-editar-producto').modal('hide');


  }

  abrirModal() {
    this.modalValeAgregar.mostrarModal();
  }

}
