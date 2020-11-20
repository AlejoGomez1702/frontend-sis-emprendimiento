import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityMaslowOne } from '@myInterfaces/maslow/activity-maslow-one';
import { SpinnerService } from '@myServices/dashboard/spinner.service';
import { MaslowService } from '@myServices/maslow.service';

@Component({
  selector: 'app-new3-maslow',
  templateUrl: './new3-maslow.component.html',
  styleUrls: ['./new3-maslow.component.css']
})
export class New3MaslowComponent implements OnInit 
{
  //Form para enviar al backend.
  public form: ActivityMaslowOne = {
    idea1: '',
    idea2: '',
    idea3: '',
    idea4: '',
    idea5: ''
  };
  // selected = false;
  // Cuales cartas estan seleccionadas.
  public selected = [];

  // Ideas de cielo azul.
  public blueSkyIdeas: [];

  // Ya se han seleccionado las 5 ideas.
  public completed: boolean;
  
  constructor(
    private maslowService: MaslowService,
    private spinner: SpinnerService,
    private router: Router
  ) 
  { }

  ngOnInit() 
  {
    this.getBlueSkyIdeas();
    this.initSelectedItems();
  }

  /**
   * Cuando se selecciona una carta se marca en el arreglo "selected".
   * @param index Cual es la idea que se esta marcando.
   */
  onSelectCard(index: number) 
  {
    this.selected[index] = !this.selected[index];
    // Verificar si ya estan los 5 seleccionados
    this.verifyComplete(index);
  }

  /**
   * Verifica si ya se han seleccionado las 5 ideas de cielo azul.
   * @param index 
   */
  verifyComplete(index: number)
  {
    let count = 0;

    for (const select of this.selected) 
    {
      if(select)
      {
        count ++;
      }      
    }

    if(count == 5)
    {
      this.completed = true;
    }
    else if(count > 5)
    {
      this.spinner.showAlertDialog('Solo puede seleccionar 5 ideas');
      this.selected[index] = !this.selected[index];
    }
  }

  /**
   * Inicializa el arreglo de items, todos en false.
   */
  initSelectedItems()
  {
    this.completed = false;
    const countItems = 25;

    for (let i = 0; i < countItems; i++) 
    {
      this.selected = [];
      this.selected[i] = false;
    }
  }

  /**
   * Obtiene la combinación de las ideas aterrizadas y locas.
   * para crear las ideas de cielo azul.
   */
  getBlueSkyIdeas()
  {
    this.maslowService.getBlueSkyIdeas().subscribe(
      res => this.handlerBlueSky(res),
      error => this.handlerErrorBlueSky(error)
    );
  }

  /**
   * Si el servidor realiza las combinaciones correctamente.
   * @param res Respuesta del servidor con las combinaciones.
   */
  handlerBlueSky(res)
  {
    this.blueSkyIdeas = res.combinations;
  }

  /**
   * Si el servidor responde con error las combinaciones de cielo azul.
   * @param error Error con el que responde el servidor.
   */
  handlerErrorBlueSky(error)
  {
    this.spinner.showAlertDialog('Error obteniendo combinaciones ' + error);
  }

  /**
   * De las ideas escogidas se enviea a la pestaña para añadirle
   * una descripción del porque se eligio cada una.
   */
  addActivity()
  {    
    this.spinner.showSpinner();
    let blueSky = this.selectBlueSky();

    if(blueSky.length == 5) // Se selecciono correctamente las 5 ideas.
    {
      this.form = {
        idea1: blueSky[0],
        idea2: blueSky[1],
        idea3: blueSky[2],
        idea4: blueSky[3],
        idea5: blueSky[4]
      };

      this.maslowService.selectBlueSkyIdeas(this.form).subscribe(
        res => this.handlerBlueSkySelect(res),
        error => this.handlerErrorBlueSkySelect(error)
      );

    }
    else
    {
      this.spinner.showAlertDialog('Con las 5 ideas que se deben seleccionar');
    }
  }

  /**
   * Si el servidor realiza las combinaciones correctamente.
   * @param res Respuesta del servidor con las combinaciones.
   */
  handlerBlueSkySelect(res)
  {
    const code = res.code;
    if(code == 200) //OK
    {
      this.router.navigateByUrl('/dashboard/maslow/new4');
    }
    else
    {
      this.spinner.showAlertDialog('En la petición al servidor: ' + code);
    }
    // this.blueSkyIdeas = res.combinations;
    // console.log('Servidor OK');
    // console.log(res);
  }

  /**
   * Si el servidor responde con error las combinaciones de cielo azul.
   * @param error Error con el que responde el servidor.
   */
  handlerErrorBlueSkySelect(error)
  {
    this.spinner.showAlertDialog('Error confirmando las ideas de cielo azul ' + error);
  }

  /**
   * Saca un arreglo con las ideas de negocio seleccionadas.
   */
  selectBlueSky(): string[]
  {
    let blueSky: string[] = [];

    for (let i = 0; i < this.selected.length; i++) 
    {
      const isSelected = this.selected[i];
      if(isSelected)
      {
        blueSky.push(this.blueSkyIdeas[i]);
      }      
    }

    return blueSky;
  }

}
