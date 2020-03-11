import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-lists',
  templateUrl: './footer-lists.component.html',
  styleUrls: ['./footer-lists.component.css']
})
export class FooterListsComponent implements OnInit 
{
  /**
   * Indica para que recurso será el footer.
   * 1 => Rutas.
   * 2 => Vehículos.
   * 3 => Clientes.
   * 4 => Cobradores.
   */
  @Input() resourceId: number;

  /**
   * Información que se debe mostrar en el footer.
   */
  public information = {
    namePlural: "",
    nameSingular: "",
    link: ""
  };

  constructor() { }

  ngOnInit() 
  {
    this.selectInformation();
    //window.alert(this.resourceId);
  }

  /**
   * Permite mapear la información correspondiente al footer
   * dependiendo del ID del recurso que se haya pasado.
   */
  selectInformation()
  {
    if(this.resourceId == 1) // RUTAS
    {
      this.information.namePlural = "Rutas";
      this.information.nameSingular = "ruta";
      this.information.link = "routes";
    }
    else if(this.resourceId == 2) //VEHICULOS
    {
      this.information.namePlural = "Vehículos";
      this.information.nameSingular = "vehículo";
      this.information.link = "vehicles";
    }
    else if(this.resourceId == 3) // CLIENTES
    {
      this.information.namePlural = "Clientes";
      this.information.nameSingular = "cliente";
      this.information.link = "clients";
    }
    else if(this.resourceId == 4) // COBRADORES
    {
      this.information.namePlural = "Cobradores";
      this.information.nameSingular = "cobrador";
      this.information.link = "employees";
    }
  }
}
