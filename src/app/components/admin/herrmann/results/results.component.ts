import { Component, OnInit } from '@angular/core';
import { HerrmannService } from '@myServices/herrmann.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit 
{

  constructor(
    private herrmannService: HerrmannService
  ) 
  { }

  ngOnInit() 
  {
    this.interpretHerrmann();
  }

  interpretHerrmann()
  {
    //Llamo a la ruta de la interpretación.
    this.herrmannService.interpretHerrmann().subscribe(
      res => this.handleResponse(res),
      error => this.handleError(error)
    ); 
  }

  handleResponse(res)
  {
    console.log(res);
    if(res.code == 200)
    {
      
    }
  }

  handleError(error)
  {
    console.log('errrrrroooorrr');
    console.log(error);
    console.log(error.error);
  }

}
