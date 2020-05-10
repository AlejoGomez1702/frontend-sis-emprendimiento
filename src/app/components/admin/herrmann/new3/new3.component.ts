import { Component, OnInit } from '@angular/core';
import { HerrmannService } from '@myServices/herrmann.service';
import { ActivityHerrmannOne } from '@myInterfaces/herrmann/activity-herman-one';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new3',
  templateUrl: './new3.component.html',
  styleUrls: ['./new3.component.css']
})
export class New3Component implements OnInit 
{
  //Form para enviar al backend.
  public form: ActivityHerrmannOne;

  // Acumulador para las secciones seleccionadas.
  public seccionA: number;
  public seccionB: number;
  public seccionC: number;
  public seccionD: number;

  // Representan el estado de las opciones que el usuario a seleccionado.
  public seccionArr: boolean[][];

  // Lo utilizo para saber el estado de las filas.
  public rows: boolean[];

  // Valida si ya se han seleccionado todas las opciones.
  public finish: boolean;

  constructor(
    private herrmannService: HerrmannService,
    private router: Router,
    private spinner: Ng4LoadingSpinnerService
  ) 
  { }

  ngOnInit() 
  {
    this.initElements();
  }

  /**
   * Verifica que se hayan seleccionado todos los campos.
   */
  verifyFinish()
  {
    let count = 0;
    for (let i = 0; i < this.rows.length; i++)
    {
      if (this.rows[i]) 
      {
        count ++;
      }
    }

    if(count == 0)
    {
      this.finish = true;
    }
    else
    {
      this.finish = false;
    }
  }

  /**
   * Permite incrementar o decrementar el número de opciones seleccionadas.
   * @param section Sección seleccionada (A,B,C o D).
   * @param option Cual de las 10 opcione es.
   */
  plusOrMinusSection(section: number, option: number)
  {    
    let optionSelected = option - 1;
    let sectionSelected = section - 1;
    let active = this.seccionArr[sectionSelected][optionSelected];
    // console.log(active);
    //Si esta activo, lo que quiero es desactivarlo.
    if(active) //de activado ..a.. desactivado. 
    {
      this.seccionArr[sectionSelected][optionSelected] = false;
      this.modifyState(section, false);
      return true;
    }
    else // de Desactivado ..a.. Activado.
    {
      this.seccionArr[sectionSelected][optionSelected] = true;
      this.modifyState(section, true);
    }

    //this.verifyFinish();
  }

  /**
   * Inicializa los componentes a su estado inicial.
   */
  initElements()
  {
    this.finish = false;

    this.form = {
      sectionA: 0,
      sectionB: 0,
      sectionC: 0,
      sectionD: 0
    };    

    this.seccionA = 0;
    this.seccionB = 0;
    this.seccionC = 0;
    this.seccionD = 0;

    //this.total = 0;

    this.seccionArr = [
      [false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false]
    ];

    this.rows = [
      //false,false,false,false,false,false,false,false,false,false
      true,true,true,true,true,true,true,true,true,true
    ];

  }

    /**
   * 
   * @param section 
   * @param option 
   */
  modifyState(section: number, plus: boolean)
  {
    // let optionSelected = option - 1;

    switch (section) 
    {
      case 1: //Seccion A
        if(plus)
        {
          this.seccionA ++;
        }
        else
        {
          this.seccionA --;
        }
        break;

      case 2: //Sección B
        if(plus)
        {
          this.seccionB ++;
        }
        else
        {
          this.seccionB --;
        }
        break;

      case 3: //Sección C
        if(plus)
        {
          this.seccionC ++;
        }
        else
        {
          this.seccionC --;
        }
        break;

      case 4: //Sección D
        if(plus)
        {
          this.seccionD ++;
        }
        else
        {
          this.seccionD --;
        }
        break;
    
      default:
        break;
    }

    //this.total = this.seccionA + this.seccionB + this.seccionC + this.seccionD;
  }

  verifyRow(row: number)
  {
    // console.log("Las filas son: ")
    // console.log(this.rows)
    let rowSelected = row - 1;
    let flag = true;

    for(let i = 0; i < 4; i++)
    {
      if(this.seccionArr[i][rowSelected])
      {
        flag = false; // se deben sesactivar las columnas.
        break;
      }
    }
    //console.log('Acumulador => ' + acum);

    if(flag) // si no se ah seleccionado ningúna opción por la fila.
    {
      this.rows[rowSelected] = true; //Se activa las opciones de la fila.
      //return true;
    }
    else
    {
      this.rows[rowSelected] = false; // Se desactivan las demas opciones.
      //return false;
    }
    this.verifyFinish();
  }

  showSpinner()
  {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000)
  }

  //***************************/
  addActivity()
  {
    this.showSpinner();

    this.form.sectionA = this.seccionA;
    this.form.sectionB = this.seccionB;
    this.form.sectionC = this.seccionC;
    this.form.sectionD = this.seccionD;

    this.herrmannService.addActivityHerrmann(this.form).subscribe(
      res => this.handleResponse(res),
      error => this.handleError(error)
    );  
  }

  handleResponse(res)
  {
    if(res.code == 200)
    {
      //Llamo a la ruta de la interpretación.
      // this.herrmannService.interpretHerrmann().subscribe(
      //   res => this.handleResponseInterpret(res),
      //   error => this.handleError(error)
      // );  

      this.router.navigateByUrl('/dashboard/herrmann/new4');
    }

    /////************SPINNERRRRRRRRRR */
    
  }

  // handleResponseInterpret(res)
  // {
  //   if(res.code == 200)
  //   {
                        

  //     //this.router.navigateByUrl('/dashboard/herrmann');
  //   }
  // }

  handleError(err)
  {
    console.log("errrrrrrrrorr");
    console.log(err)
    /////************SPINNERRRRRRRRRR */
  }

}
