import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-paginator-producto',
  templateUrl: './paginator-producto.component.html',
  styles: []
})
export class PaginatorProductoComponent implements OnInit, OnChanges {

// tslint:disable-next-line:no-input-rename
@Input('paginador') pageable: any;
totalPages: number[];
desde: number;
hasta: number;

constructor() {
 }

ngOnInit() {
  this.initPaginator();
}

ngOnChanges(changes: SimpleChanges): void {
   const paginadorActualizado = changes['pageable'];
   if (paginadorActualizado.previousValue) {
      this.initPaginator();
   }
}

private initPaginator() {
  this.desde = Math.min( Math.max(1, this.pageable.number - 6), this.pageable.totalPages - 7);
  this.hasta = Math.max( Math.min(this.pageable.totalPages, this.pageable.number + 6), 8);

  if (this.pageable.totalPages > 7) {
    this.totalPages = new Array(this.hasta - this.desde + 1)
      .fill(0)
        .map((valor, indice) => indice + this.desde);

  } else {
    this.totalPages = new Array(this.pageable.totalPages)
      .fill(0)
        .map((valor, indice) => indice + 1);
  }
}


}
