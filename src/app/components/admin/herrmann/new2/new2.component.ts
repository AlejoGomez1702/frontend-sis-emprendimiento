import { Component, OnInit } from '@angular/core';
import { HerrmannService } from '@myServices/herrmann.service';
import { ActivityHerrmannOne } from '@myInterfaces/herrmann/activity-herman-one';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new2',
  templateUrl: './new2.component.html',
  styleUrls: ['./new2.component.css']
})
export class New2Component implements OnInit 
{
  //Form para enviar al backend.
  public form: ActivityHerrmannOne;

  // Acumulador para las secciones seleccionadas.
  public seccionA: number;
  public seccionB: number;
  public seccionC: number;
  public seccionD: number;

  // Acumulador por todas las secciones.
  public total: number;

  // Representan el estado de las opciones que el usuario a seleccionado.
  public seccionArr: boolean[][];

  constructor(
    private herrmannService: HerrmannService,
    private router: Router
  ) 
  { }

  ngOnInit() 
  {
    this.initElements();
  }

  /**
   * Permite incrementar o decrementar el número de opciones seleccionadas.
   * @param section Sección seleccionada (A,B,C o D).
   * @param option Cual de las 10 opcione es.
   */
  plusOrMinusSection(section: number, option: number)
  {
    console.log(this.seccionArr);
    console.log("seccion A: " + this.seccionA);
    console.log("seccion B: " + this.seccionB);
    console.log("seccion C: " + this.seccionC);
    console.log("seccion D: " + this.seccionD);
    
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
      let isMax = this.verifyCount();
      if(isMax) // si aun se pueden seleccionar mas opciones.
      {
        this.seccionArr[sectionSelected][optionSelected] = true;
        this.modifyState(section, true);
        return true;
      }
      else
      {
        return false;
      }
    }
  }

  /**
   * Inicializa los componentes a su estado inicial.
   */
  initElements()
  {
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

    this.total = 0;

    this.seccionArr = [
      [false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false]
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

    this.total = this.seccionA + this.seccionB + this.seccionC + this.seccionD;
  }

  /**
   * Verifica si se puede incrementar una opción mas.
   * True => Se pueden incrementar; False => NO se puede incrementar.
   */
  verifyCount()
  {
    let max = 8; //Se permite seleccionar máximo 8 opciones.
    let total = this.seccionA + this.seccionB + this.seccionC + this.seccionD;
    if(total == max) //si se han seleccionado las 8 opciones posibles.
    {
      return false
    }    

    return true;
  }

  //***************************/
  addActivity()
  {
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
      this.router.navigateByUrl('/dashboard/herrmann/new3');
    }

    /////************SPINNERRRRRRRRRR */
    
  }

  handleError(err)
  {
    /////************SPINNERRRRRRRRRR */
  }


}
