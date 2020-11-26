import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from '@myServices/dashboard/spinner.service';
import { LienzoService } from '@myServices/lienzo.service';

@Component({
  selector: 'app-new-lienzo',
  templateUrl: './new-lienzo.component.html',
  styleUrls: ['./new-lienzo.component.css']
})
export class NewLienzoComponent implements OnInit 
{
  // Tematica ingresada sobre la cual se va desarrollar la actividad.
  public tematica: string = '';

  constructor(
    private spinner: SpinnerService,
    private router: Router,
    private lienzoService: LienzoService
  ) { }

  ngOnInit() {
  }

  addActivity()
  {
    if(!(this.tematica == ''))
    {
      this.spinner.showSpinner();
      const form = {
        'tematica': this.tematica
      };

      this.lienzoService.addActivityLienzo(form).subscribe(
        res => this.handleResponse(res),
        error => this.handleError(error)
      );

    }
    else
    {
      this.spinner.showAlertDialog('Debe ingresar las 5 ideas de negocio!');
    }
  }

  /**
   * El servidor da una respuesta positiva a la petición 
   * de añadir una nueva actividad
   * @param res Respuesta del servidor.
   */
  handleResponse(res)
  {
    const code = res.code;
    if(code == 200) //OK
    {
      this.router.navigateByUrl('/dashboard/lienzo/new2');
    }
    else
    {
      this.spinner.showAlertDialog('En la petición al servidor: ' + code);
    }
  }

  /**
   * Si el servidor responde con un error al tratar de añadir una actividad al test.
   * @param error Error con el que responde el servidor.
   */
  handleError(error)
  {
    this.spinner.showAlertDialog('En la petición al servidor: ' + error);
  }

}
