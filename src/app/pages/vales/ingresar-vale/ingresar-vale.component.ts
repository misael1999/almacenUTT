import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Area } from 'src/app/models/Area';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as fromVales from 'src/app/store/actions';
declare function init_factura_inputs();


@Component({
  selector: 'app-ingresar-vale',
  templateUrl: './ingresar-vale.component.html',
  styleUrls: []
})
export class IngresarValeComponent implements OnInit {

  areas: Area[];
  loading: boolean;
  formInformation: FormGroup;
  numero: number;

  @ViewChild('txtArea') txtArea: ElementRef;

  constructor(private store: Store<AppState>, private router: Router) {
    this.store.dispatch(new fromVales.LoadAreas());
    this.store.subscribe(
      resp => {
        this.areas = resp.areas.areas;
        this.loading = resp.vale.loading;

      }
    );
  }

  ngOnInit() {
    init_factura_inputs();
    this.formInformation = new FormGroup({
      numero: new FormControl(null, Validators.required),
      fecha: new FormControl(null, Validators.required),
      area: new FormControl(null, Validators.required),
      responsable: new FormControl(null, Validators.required)
    });
  }

}
