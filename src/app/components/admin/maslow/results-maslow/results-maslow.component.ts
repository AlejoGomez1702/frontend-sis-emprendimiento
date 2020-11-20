import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '@myServices/dashboard/spinner.service';
import { MaslowService } from '@myServices/maslow.service';

@Component({
  selector: 'app-results-maslow',
  templateUrl: './results-maslow.component.html',
  styleUrls: ['./results-maslow.component.css']
})
export class ResultsMaslowComponent implements OnInit 
{
  // Ideas de negocio de cielo azul.
  public blueSky: string[] = ['','','','',''];

  // Explicación de las ideas de cielo azul.
  public explanation: string[] = ['','','','',''];

  constructor(
    private maslowService: MaslowService,
    private spinner: SpinnerService
  ) 
  { }

  ngOnInit() 
  {
    this.maslowService.getResultsMaslow().subscribe(
      res => this.handlerResponse(res),
      error => this.handlerError(error)
    );
  }

  handlerResponse(res)
  {
    if(res.code == 200)
    {
      this.blueSky = res.selected;
      this.explanation = res.explanation;
    }
  }

  handlerError(error)
  {
    this.spinner.showAlertDialog('Obteniendo los resultados del test de maslow');
  }

}
