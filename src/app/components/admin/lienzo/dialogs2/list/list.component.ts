import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LienzoService } from '@myServices/lienzo.service';
import { AddComponent } from '../add/add.component';
import {MAT_DIALOG_DATA} from '@angular/material'
import { SpinnerService } from '@myServices/dashboard/spinner.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit 
{
  // Listado de productos y servicios.
  public list: string[] = [];

  // Indica cual de las secciones es.
  public num: number;

  constructor(
    private lienzoService: LienzoService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private spinner: SpinnerService
  ) 
  { }

  ngOnInit() 
  {
    this.list = this.data.list;
    this.num = this.data.num;
  }

  cancel()
  {
    console.log('Cancelar');
  }

  save()
  {
    this.lienzoService.saveLienzo().subscribe(
      res => this.handleResponse(res),
      error => this.handleError(error)
    ); 
  }

  handleResponse(res)
  {
    this.spinner.showSuccesDialog();
    console.log('La respuesta de guardar es:');
    console.log(res);
  }

  handleError(error)
  {
    console.log(error);
  }

  add()
  {
    this.dialog.open(AddComponent, {
      data: {
        num: this.num
      }
    });
  }

  delete(index)
  {
    this.list.splice(index);

    switch (this.num) 
      {
        case 1:
          this.lienzoService.op1.splice(index);
          break;

        case 2:
          this.lienzoService.op2.splice(index);
          break;

        case 3:
          this.lienzoService.op3.splice(index);
          break;

        case 4:
          this.lienzoService.op4.splice(index);
          break;

        case 5:
          this.lienzoService.op5.splice(index);
          break;

        case 6:
          this.lienzoService.op6.splice(index);
          break;
      
        default:
          break;
      }
    
  }


}
