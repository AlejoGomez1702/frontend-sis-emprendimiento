import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UsersService } from '@myServices/users.service';

export interface User {
  name: string;
  surname: string;
  email: string;
  description: string;
  created_at: string;
  state: number;  
}

var ELEMENT_DATA = [{name: "Nombre",
    surname: "apellidos",
    email: "correo",
    description: "descripcion",
    created_at: "creado",
    state: 1  }];

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit 
{
  /**
   * Listado con los usuarios.
   */
  public listData: MatTableDataSource<any>;

  /**
   * Nombres de las columnas de la tabla.
   */
  public displayedColumns: string[] = ['name', 'surname', 
                                'email', 'description',
                                'created_at', 'state'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  public dataSource = new MatTableDataSource(ELEMENT_DATA);
  // public dataSource: MatTableDataSource;

  

  public constructor(
    private usersService: UsersService,
    private changeDetectorRefs: ChangeDetectorRef
  ) 
  {
    // this.usersService.list().subscribe(
    //   res => this.handleResponse(res),
    //   error => this.handleError(error)
    // );
  }

  public ngOnInit()
  {
    // this.dataSource.sort = this.sort;
    this.usersService.list().subscribe(
      res =>  this.handleResponse(res),
      error => this.handleError(error)
    );
  }

  listUsers()
  {
    this.usersService.list().subscribe(
      res => this.handleResponse(res),
      error => this.handleError(error)
    );
  }

  handleResponse(res)
  {
    console.log('Exitooooo');
    this.dataSource = new MatTableDataSource(res.users);
  }

  handleError(error)
  {
    console.log('Errroooorr');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
}
