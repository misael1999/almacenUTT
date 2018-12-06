import { Injectable } from '@angular/core';
import { Usuario } from '../../models/Usuario';

@Injectable()
export class SidebarService {
  menu: any[];

  constructor() {
      this.menu = [];
      this.menu = [
        {
          titulo: 'Facturas',
          icono: 'mdi mdi-file-document',
          submenu: [
            { titulo: 'Agregar factura', url: '/facturas-ingresar' },
            { titulo : 'Lista de facturas', url: '/facturas/almacen/page/1' },
            { titulo: 'Subir documento', url: '/cargar-factura' },
            { titulo: 'Reportes', url: '/' },
          ]
        },
        {
            titulo: 'Vales de salidas',
            icono: 'mdi mdi-file-export',
            submenu: [
              { titulo: 'Generar vale', url: '/vales-ingresarr' },
              { titulo : 'Lista de vales', url: '/vales/activados' },
              { titulo: 'Reportes', url: '/' },
            ]
          },
      ];
   }

}
