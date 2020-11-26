import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LienzoService } from '@myServices/lienzo.service';
import { ListComponent } from '../dialogs2/list/list.component';

@Component({
  selector: 'app-new2-lienzo',
  templateUrl: './new2-lienzo.component.html',
  styleUrls: ['./new2-lienzo.component.css']
})
export class New2LienzoComponent implements OnInit 
{
  // Tematica de la cual se va llenar la info.
  public tematica: string = '';

  // información de las 6 secciones del test.
  public op1: string[] = [];
  public op2: string[] = [];
  public op3: string[] = [];
  public op4: string[] = [];
  public op5: string[] = [];
  public op6: string[] = [];


  constructor(
    private lienzoService: LienzoService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() 
  {
    this.initArrayInfo();

    this.lienzoService.getInformationLienzo().subscribe(
      res => this.handleResponse(res),
      error => this.handleError(error)
    ); 
  }

  handleResponse(res)
  {
    console.log('La informacion general del test es');
    console.log(res);
    let code = res.code;
    if(code == 200)
    {
      this.tematica = res.tematica;
      if(!(res.error == 'vacio')) // Si ya tiene info
      {
        this.op1 = res.lienzo.op1;
        this.lienzoService.op1 = res.lienzo.op1;

        this.op2 = res.lienzo.op2;
        this.lienzoService.op2 = res.lienzo.op2;

        this.op3 = res.lienzo.op3;
        this.lienzoService.op3 = res.lienzo.op3;

        this.op4 = res.lienzo.op4;
        this.lienzoService.op4 = res.lienzo.op4;

        this.op5 = res.lienzo.op5;
        this.lienzoService.op5 = res.lienzo.op5;

        this.op6 = res.lienzo.op6;
        this.lienzoService.op6 = res.lienzo.op6;
      }
      // this.router.navigateByUrl('/dashboard/lienzo/new');
    }
    else
    {
      //Cuadrar el spinner
    }
    
  }

  handleError(err)
  {
    console.log(err.error);
    //this.spinner.hide();
  }

  // 3
  showProblemasDolores()
  {    
    console.log('showProblemasDolores');
    this.dialog.open(ListComponent, {
      data: {
        list: this.lienzoService.op3,
        num: 3
      }
    });
  }

  // 2 Acciones del cliente
  showAccionesCliente()
  {
    console.log('showAccionesCliente');
    this.dialog.open(ListComponent, {
      data: {
        list: this.lienzoService.op2,
        num: 2
      }
    });
  }

  // 4
  showBeneficiosAlegriasCliente()
  {
    console.log('showBeneficiosAlegriasCliente()');
    this.dialog.open(ListComponent, {
      data: {
        list: this.lienzoService.op4,
        num: 4
      }
    });
  }

  // 5
  showProblemasDolores2()
  {
    this.dialog.open(ListComponent, {
      data: {
        list: this.lienzoService.op5,
        num: 5
      }
    });
  }

  // 6
  showBeneficiosAlegrias()
  {
    this.dialog.open(ListComponent, {
      data: {
        list: this.lienzoService.op6,
        num: 6
      }
    });
  }

  // 1 sección
  showProductosServicios()
  {
    this.dialog.open(ListComponent, {
      data: {
        list: this.lienzoService.op1,
        num: 1
      }
    });

    console.log('showProductosServicios 111');
  }

  showSegmentoClientes()
  {
    console.log('showSegmentoClientes');
  }

  showAlineacionEncaje()
  {
    console.log('showAlineacionEncaje');
  }

  initArrayInfo()
  {
    this.op1 = this.lienzoService.op1;
    this.op2 = this.lienzoService.op2;
    this.op3 = this.lienzoService.op3;
    this.op4 = this.lienzoService.op4;
    this.op5 = this.lienzoService.op5;
    this.op6 = this.lienzoService.op6;
  }

}
