import { Component, Inject, OnInit } from '@angular/core';
import { LienzoService } from '@myServices/lienzo.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit 
{
  // A que número de sección corresponde.
  public num: number;

  // Item que se desea agregar
  public item: string = '';

  constructor(
    private lienzoService: LienzoService,
    public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) 
  { }

  ngOnInit() 
  {
    this.num = this.data.num;
  }

  cancel()
  {
    this.dialogRef.close();
  }

  add()
  {
    if(this.item != '')
    {
      switch (this.num) 
      {
        case 1:
          this.lienzoService.op1.push(this.item);
          break;

        case 2:
          this.lienzoService.op2.push(this.item);
          break;

        case 3:
          this.lienzoService.op3.push(this.item);
          break;

        case 4:
          this.lienzoService.op4.push(this.item);
          break;

        case 5:
          this.lienzoService.op5.push(this.item);
          break;

        case 6:
          this.lienzoService.op6.push(this.item);
          break;
      
        default:
          break;
      }
    }

  }

}
