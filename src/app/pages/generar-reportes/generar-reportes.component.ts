import { Component, OnInit } from '@angular/core';
declare function init_selectPicker();

@Component({
  selector: 'app-generar-reportes',
  templateUrl: './generar-reportes.component.html',
  styles: []
})
export class GenerarReportesComponent implements OnInit {
  meses = [{numero: '1', mes: 'Enero'}, {numero: '2', mes: 'Febrero'},
   {numero: '3', mes: 'Marzo'}, {numero: '4', mes: 'Abril'}, {numero: '5', mes: 'Mayo'},
   {numero: '6', mes: 'Junio'}, {numero: '7', mes: 'Julio'}, {numero: '8', mes: 'Agosto'},
   {numero: '9', mes: 'Septiembre'}, {numero: '10', mes: 'Octubre'}, {numero: '11', mes: 'Noviembre'},
   {numero: '12', mes: 'Diciembre'}];

   anos: any[] = [];

  constructor() {
    init_selectPicker();
    for (let i = 2017; i < 2030; i++) {
      this.anos.push(i + 1);
    }
   }

  ngOnInit() {
  }

}
