import { Component, OnInit } from '@angular/core';
import { HerrmannService } from '@myServices/herrmann.service';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit 
{

  public polarAreaChartLabels: Label[] = ['ZonaA', 'ZonaC', 'ZonaB','ZonaD'];
  public polarAreaChartData: SingleDataSet = [6, 5, 9, 7];
  public polarAreaLegend = true;
  public polarAreaChartType: ChartType = 'polarArea';

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

  // events ************************
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
