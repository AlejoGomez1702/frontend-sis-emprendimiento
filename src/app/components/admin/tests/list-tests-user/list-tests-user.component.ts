import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { TestsService } from '@myServices/tests.service';
import { HerrmannService } from '@myServices/herrmann.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-tests-user',
  templateUrl: './list-tests-user.component.html',
  styleUrls: ['./list-tests-user.component.css']
})
export class ListTestsUserComponent implements OnInit 
{
  // displayedColumns = ['name', 'type', 'updated_at', 'user.name', 'user.surname', 'user.email', 'user.state', 'actions'];
  displayedColumns = ['id', 'name', 'type', 'created_at', 'actions'];
  public dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  tests: any[];

  constructor(
    private spinner: Ng4LoadingSpinnerService,
    private testsService: TestsService,
    private router: Router,
    private herrmannService: HerrmannService
  ) 
  {
    this.testsService.listByUser().subscribe(
      response => this.handleResponse(response)
    );

    this.dataSource = new MatTableDataSource(this.tests);
  }

  ngOnInit() {
  }

  handleResponse(response)
  {    
    console.log('Los tests dicen: ');
    console.log(response);
    const testsArray: any[] = Object.values(response.Tests);
    // console.log(testsArray);
    this.tests = testsArray;
    this.dataSource.data = this.tests;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  //*********************************************************** */
  showTest(id)
  {
    this.herrmannService.saveTestId(id);
    this.router.navigateByUrl('/dashboard/herrmann/interpret');

    console.log("el id es::");
    console.log(id);
  }

}
