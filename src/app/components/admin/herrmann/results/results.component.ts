import { Component, OnInit } from '@angular/core';
import { HerrmannService } from '@myServices/herrmann.service';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { InterpretationHerrmann } from '@myInterfaces/herrmann/interpretation-herrmann';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit 
{

  // [0] => D;  [1] => C;  [2] => B;  [3] => A
  public polarAreaChartLabels: Label[] = ['D => Abstracto (El Estratega)', 'C => Emocional (El Comunicador)', 'B => Secuencial (El Organizado)','A => Lógico (El Experto)'];
  public polarAreaChartData: SingleDataSet = [10,10,10,10];
  public polarAreaLegend = true;
  public polarAreaChartType: ChartType = 'polarArea';
  //Amarillo, Rojo, Verde, Azul
  public polarAreaColors = [
    {
      backgroundColor: ['rgba(245,235,36)','rgba(219,32,37)', 'rgba(49,225,70)', 'rgba(66,103,244)'],
    } 
  ];
  

  // Interpretación del test.
  public interpretationHerrmann: InterpretationHerrmann;

  constructor(
    private herrmannService: HerrmannService
  ) 
  {
    this.initInformation();
    // this.interpretHerrmann();
  }

  ngOnInit() 
  {
    this.initInformation();
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
    console.log('Lo que me retorna la interpretación del herrmann');
    console.log(res);
    this.interpretationHerrmann = res;
    // if(this.interpretationHerrmann.code == 200)
    // {
    //   console
    let information: SingleDataSet = [this.interpretationHerrmann.scors.D,
                                      this.interpretationHerrmann.scors.C,
                                      this.interpretationHerrmann.scors.B,
                                      this.interpretationHerrmann.scors.A];

    

    this.polarAreaChartData = information;
    // }
    //console.log(this.polarAreaChartData);
  }

  handleError(error)
  {
    console.log('errrrrroooorrr');
    console.log(error);
    console.log(error.error);
  }

  initInformation()
  {
    this.interpretationHerrmann = {
      code: 0,
      hemisphere: 0,
      interpretation: {
          Characteristics: "",
          Description: "",
          Dominance: "",
          Nickname: "",
          Weakness: ""
      },
      messagge: "",
      scors: {
          A: 0,
          B: 0,
          C: 0,
          D: 0
      }
    }
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
