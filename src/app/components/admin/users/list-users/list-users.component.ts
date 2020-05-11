import { Component, OnInit, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit 
{
  public ELEMENT_DATA: User[] = [];

  displayedColumns: string[] = ['name', 'surname', 
                                'email', 'description',
                                'created_at', 'state'];

  public dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  public constructor(
    private usersService: UsersService
  ) 
  {
    this.usersService.list().subscribe(
      res => this.handleResponse(res),
      error => this.handleError(error)
    );
  }

  public ngOnInit()
  {
    this.dataSource.sort = this.sort;
    this.usersService.list().subscribe(
      res => this.handleResponse(res),
      error => this.handleError(error)
    );
  }

  handleResponse(res)
  {
    console.log('Exitooooo');
    this.ELEMENT_DATA = res.users;
    console.log(res.users)
    //this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    console.log(this.ELEMENT_DATA);
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
