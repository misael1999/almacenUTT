import { Component, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromEstadisticas from '../../../store/actions';

@Component({
  selector: 'app-grafica-vales',
  templateUrl: './grafica-vales.component.html',
  styles: []
})
export class GraficaValesComponent implements OnInit {

  fecha1: any;
  fecha2: any;
  fecha3: any;
  barChartLabels: string[];
  barChartType = 'bar';
  barChartLegend = true;
  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartData: any[];
  loading: boolean;
  loaded: boolean;

  constructor(private store: Store<AppState>) {
    this.store.select('estadisticas')
      .subscribe(estadistica => {
      this.loaded = estadistica.loaded;
      this.loading = estadistica.loading;

        if (estadistica.estadisticasVale != null) {
          this.fecha1 = estadistica.estadisticasVale.fecha1;
          this.fecha2 = estadistica.estadisticasVale.fecha2;
          this.fecha3 = estadistica.estadisticasVale.fecha3;
          this.iniciarGrafica();
        }

      });
  }


  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


  ngOnInit() {
    this.store.dispatch(new fromEstadisticas.LoadEstadisticasVale());
  }


  iniciarGrafica() {

    const valoresFecha1: any[] = Array.from(this.fecha1.valesPorMes);
    const valoresFecha2: any[] = Array.from(this.fecha2.valesPorMes);
    const valoresFecha3: any[] = Array.from(this.fecha3.valesPorMes);
    const datos = [];
    let valores = [];


    for (let i = 0; i < valoresFecha1.length; i++) {
        valores = [valoresFecha3[i].total, valoresFecha2[i].total, valoresFecha1[i].total];
        datos.push({data: valores, label: valoresFecha1[i].area});
    }

    this.barChartLabels = [this.fecha3.mes, this.fecha2.mes, this.fecha1.mes];

    this.barChartData = [];
    datos.forEach(area => {
      this.barChartData.push(area);
    });

  }

}
