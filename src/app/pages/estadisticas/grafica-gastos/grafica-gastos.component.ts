import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica-gastos',
  templateUrl: './grafica-gastos.component.html',
  styles: []
})
export class GraficaGastosComponent implements OnInit {

 // Pie
 public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
 public pieChartData:number[] = [300, 500, 100];
 public pieChartType:string = 'pie';

 // events
 public chartClicked(e:any):void {
   console.log(e);
 }

 public chartHovered(e:any):void {
   console.log(e);
 }

  ngOnInit() {
  }

}
