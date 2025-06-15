
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
// Removed MatCommonModule as it is deprecated and not explicitly used.


export interface Tabla {
  id: number;
  modelo_coche: string;
  marca_coche: string;
  precio_coche: number;
  fecha_lanzamiento: string;
  unidades_vendidas: number;
}

const data: Tabla[] = [
  { id: 1, modelo_coche: 'Model S', marca_coche: 'Tesla', precio_coche: 79999, fecha_lanzamiento:'2012-06-22', unidades_vendidas: 250000 },
  { id: 2, modelo_coche: 'Mustang', marca_coche: 'Ford', precio_coche: 55999, fecha_lanzamiento:'1964-04-17', unidades_vendidas: 1000000 },
  { id: 3, modelo_coche: 'Civic', marca_coche: 'Honda', precio_coche: 24999, fecha_lanzamiento:'1972-07-11', unidades_vendidas: 18000000 },
  { id: 4, modelo_coche: 'Camry', marca_coche: 'Toyota', precio_coche: 24999, fecha_lanzamiento:'1982-01-01', unidades_vendidas: 15000000 },
  { id: 5, modelo_coche: '3 Series', marca_coche: 'BMW', precio_coche: 41999, fecha_lanzamiento:'1975-05-01', unidades_vendidas: 1500000 },
  { id: 6, modelo_coche: 'A4', marca_coche: 'Audi', precio_coche: 39999, fecha_lanzamiento:'1994-06-01', unidades_vendidas: 5000000 },
  { id: 7, modelo_coche: 'C-Class', marca_coche: 'Mercedes-Benz', precio_coche: 41999, fecha_lanzamiento:'1993-01-01', unidades_vendidas: 5000000 },
  { id: 8, modelo_coche: 'Golf', marca_coche: 'Volkswagen', precio_coche: 24999, fecha_lanzamiento:'1974-03-29', unidades_vendidas: 35000000 },  
  { id: 9, modelo_coche: 'Elantra', marca_coche: 'Hyundai', precio_coche: 19999, fecha_lanzamiento:'1990-07-01', unidades_vendidas: 15000000 },
  { id: 10, modelo_coche: 'Altima', marca_coche: 'Nissan', precio_coche: 24999, fecha_lanzamiento:'1992-06-01', unidades_vendidas: 5000000 },
  { id: 11, modelo_coche: 'Mazda3', marca_coche: 'Mazda', precio_coche: 21999, fecha_lanzamiento:'2003-06-01', unidades_vendidas: 5000000 },
  { id: 12, modelo_coche: 'Impreza', marca_coche: 'Subaru', precio_coche: 22999, fecha_lanzamiento:'1992-09-01', unidades_vendidas: 5000000 },
  { id: 13, modelo_coche: 'Kona', marca_coche: 'Hyundai', precio_coche: 24999, fecha_lanzamiento:'2017-06-01', unidades_vendidas: 1000000 },
  { id: 14, modelo_coche: 'RAV4', marca_coche: 'Toyota', precio_coche: 29999, fecha_lanzamiento:'1994-04-01', unidades_vendidas: 10000000 },
  { id: 15, modelo_coche: 'CR-V', marca_coche: 'Honda', precio_coche: 27999, fecha_lanzamiento:'1995-10-01', unidades_vendidas: 10000000 }
];

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.scss'
})

export class TablaComponent {

  dataSource = new MatTableDataSource<Tabla>(data);
  
  modoalternativo = false;

  displayedColumns: string[] = [];



  cambiarModo(): void {
    this.modoalternativo = !this.modoalternativo;
  }
  
}
