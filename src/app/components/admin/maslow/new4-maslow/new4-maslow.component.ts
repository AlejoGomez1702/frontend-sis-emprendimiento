import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from '@myServices/dashboard/spinner.service';
import { MaslowService } from '@myServices/maslow.service';

@Component({
  selector: 'app-new4-maslow',
  templateUrl: './new4-maslow.component.html',
  styleUrls: ['./new4-maslow.component.css']
})
export class New4MaslowComponent implements OnInit 
{
  // Explicación del porque la selección de cada idea.
  public explanation: string[] = ['','','','',''];

  // 5 ideas seleccionadas por el usuario como mas viables.
  public blueSkyIdeas: string[] = ['','','','',''];

  constructor(
    private maslowService: MaslowService,
    private spinner: SpinnerService,
    private router: Router
  ) 
  { }

  ngOnInit() 
  {
    this.getBlueSky();
  }

  getBlueSky()
  {
    this.maslowService.getFiveBlueSkyIdeas().subscribe(
      res => this.handlerResponseBlueSky(res),
      error => this.handlerErrorBlueSky(error)
    );
  }

  handlerResponseBlueSky(res)
  {
    this.blueSkyIdeas = res.blue_sky;
    console.log('Ok Servidor');
    console.log(res);
  }

  handlerErrorBlueSky(error)
  {
    this.spinner.showAlertDialog('Error obteniendo las ideas de cielo azul: ' + error);
  }

  addActivity()
  {
    console.log('Lo que me ingreso el usuario es lo siguiente: ');
    console.log(this.explanation);

    const completed = this.verifyExplanation();
    if(completed)
    {
      const form = {
        explanation: this.explanation
      };

      this.maslowService.completeMaslow(form).subscribe(
        res => this.handlerResponseMaslow(res),
        error => this.handlerErrorMaslow(error)
      );
    }
    else
    {
      this.spinner.showAlertDialog('Debe dar explicación a todas las ideas de negocio');
    }

  }

  handlerResponseMaslow(res)
  {
    // console.log('Servidor OK');
    if(res.code == 200)
    {
      console.log('Servidor OK');
      this.router.navigateByUrl('/dashboard/maslow/results');
    }
  }

  handlerErrorMaslow(error)
  {
    // console.log('Servidor Error');
    this.spinner.showAlertDialog('Completando la explicación en el servidor: ' + error.error);
  }


  verifyExplanation()
  {
    for (const expl of this.explanation) 
    {
      if(expl == '') // Si alguno esta vacio aún.
      {
        return false;
      }
    }

    return true;
  }

}
