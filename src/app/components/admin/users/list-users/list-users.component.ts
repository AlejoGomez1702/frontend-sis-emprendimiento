import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { UsersService } from '@myServices/users.service';
import { UserData } from '@myInterfaces/userData';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit 
{

  displayedColumns = ['name', 'surname', 'email', 'created_at', 'roles', 'state', 'actions'];
  public dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  users: UserData[];

  public constructor(
    private usersService: UsersService,
    // private changeDetectorRefs: ChangeDetectorRef,
    private spinner: Ng4LoadingSpinnerService
  ) 
  {
    // this.dataSource = new MatTableDataSource();
    this.usersService.list().subscribe(
      response => this.handleResponse(response)
    );

    this.dataSource = new MatTableDataSource(this.users);
  }

  public ngOnInit()
  {
  }

  handleResponse(response)
  {    
    const peopleArray: UserData[] = Object.values(response);
    console.log(peopleArray);
    this.users = peopleArray;
    this.dataSource.data = this.users;
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  // deleteUser(id)
  // {
  //   this.usersService.delete(id).subscribe(
  //     res => this.userDeleted(res),
  //     error => this.notUserDeleted(error)
  //   );
  // }

  userDeleted(res)
  {
    this.usersService.list().subscribe(
      response => this.handleResponse(response)
    );
  }

  deleteUser(id)
  {
    Swal.fire({
      title: '¿Está seguro?',
      text: "Eliminará Permanentemente El Usuario!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminar',
      cancelButtonText:'Cancelar',
      reverseButtons: true
    }).then((result) => {
      
      if (result.value) 
      {
        this.usersService.delete(id).subscribe(
          res => this.userDeleted(res),
          error => this.notUserDeleted(error)
        );
      }
    });
  }

  notUserDeleted(error)
  {

  }
}