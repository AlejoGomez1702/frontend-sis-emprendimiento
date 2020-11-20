import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '@myServices/dashboard/spinner.service';
import { MaslowService } from '@myServices/maslow.service';
import { ActivityMaslowOne } from '@myInterfaces/maslow/activity-maslow-one';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-maslow',
  templateUrl: './new-maslow.component.html',
  styleUrls: ['./new-maslow.component.css']
})
export class NewMaslowComponent implements OnInit 
{
  //Form para enviar al backend.
  public form: ActivityMaslowOne = {
    idea1: '',
    idea2: '',
    idea3: '',
    idea4: '',
    idea5: ''
  };

  // 5 ideas de negocio aterrizadas.
  public groundedIdeas1: string = '';
  public groundedIdeas2: string = '';
  public groundedIdeas3: string = '';
  public groundedIdeas4: string = '';
  public groundedIdeas5: string = '';


  constructor(
    private maslowService: MaslowService,
    private spinner: SpinnerService,
    private router: Router
  ) 
  { }

  ngOnInit() {
  }

  /**
   * Añade una nueva actividad al tes de la pirámide de Maslow.
   */
  addActivity()
  {    
    const completed = this.verifyCompleted();
    if(completed)
    {
      this.spinner.showSpinner();
      this.form = {
        idea1: this.groundedIdeas1,
        idea2: this.groundedIdeas2,
        idea3: this.groundedIdeas3,
        idea4: this.groundedIdeas4,
        idea5: this.groundedIdeas5
      };

      this.maslowService.addActivityMaslow(this.form).subscribe(
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
   * de añadir una nueva actividad al test de Maslow.
   * @param res Respuesta del servidor.
   */
  handleResponse(res)
  {
    const code = res.code;
    if(code == 200) //OK
    {
      this.router.navigateByUrl('/dashboard/maslow/new2');
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

  /**
   * True => Se ingresaron las 5 ideas de negocio.
   * False => Aún no se han ingresado las 5 ideas de negocio requeridas.
   */
  verifyCompleted()
  {
    return !(
      this.groundedIdeas1 == '' ||
      this.groundedIdeas2 == '' ||
      this.groundedIdeas3 == '' ||
      this.groundedIdeas4 == '' ||
      this.groundedIdeas5 == ''
    )
  }

}
