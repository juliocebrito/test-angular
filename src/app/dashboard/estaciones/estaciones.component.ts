import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { EstacionesService } from '../estaciones/estaciones.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-estaciones',
  templateUrl: './estaciones.component.html',
  styleUrls: ['./estaciones.component.css']
})
export class EstacionesComponent implements OnInit, AfterViewInit {
  displayedColumns = [
    'id',
    'nombre',
    'ubicacion',
    'region',
    'departamento',
    'ciudad',
    'direccion',
    'latitud',
    'longitud',
    'estructura',
    'categoria',
  ];
  dataSource = new MatTableDataSource();

  loading = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private estacionesService: EstacionesService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.estacionesService.readEstaciones().subscribe(({data}) => {
      this.dataSource = new MatTableDataSource(data.estaciones);
      this.loading = data.loading;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
