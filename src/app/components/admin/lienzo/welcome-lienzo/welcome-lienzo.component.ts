import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AccionesClienteComponent } from '../dialogs/acciones-cliente/acciones-cliente.component';
import { AlineacionEncajeComponent } from '../dialogs/alineacion-encaje/alineacion-encaje.component';
import { BeneficiosAlegriasClienteComponent } from '../dialogs/beneficios-alegrias-cliente/beneficios-alegrias-cliente.component';
import { BeneficiosAlegriasComponent } from '../dialogs/beneficios-alegrias/beneficios-alegrias.component';
import { MapaValorComponent } from '../dialogs/mapa-valor/mapa-valor.component';
import { ProblemasDoloresComponent } from '../dialogs/problemas-dolores/problemas-dolores.component';
import { ProblemasDolores2Component } from '../dialogs/problemas-dolores2/problemas-dolores2.component';
import { ProductosServiciosComponent } from '../dialogs/productos-servicios/productos-servicios.component';
import { SegmentoClientesComponent } from '../dialogs/segmento-clientes/segmento-clientes.component';

@Component({
  selector: 'app-welcome-lienzo',
  templateUrl: './welcome-lienzo.component.html',
  styleUrls: ['./welcome-lienzo.component.css']
})
export class WelcomeLienzoComponent implements OnInit 
{

  constructor(
    public dialog: MatDialog
  ) 
  { }

  ngOnInit() 
  {
  }

  showProblemasDolores()
  {
    console.log('showProblemasDolores');
    this.dialog.open(ProblemasDoloresComponent);
  }

  showAccionesCliente()
  {
    console.log('showAccionesCliente');
    this.dialog.open(AccionesClienteComponent);
  }

  showBeneficiosAlegriasCliente()
  {
    console.log('showBeneficiosAlegriasCliente');
    this.dialog.open(BeneficiosAlegriasClienteComponent);
  }

  showProblemasDolores2()
  {
    console.log('showProblemasDolores2');
    this.dialog.open(ProblemasDolores2Component);
  }

  showBeneficiosAlegrias()
  {
    console.log('showBeneficiosAlegrias');
    this.dialog.open(BeneficiosAlegriasComponent);
  }

  showProductosServicios()
  {
    console.log('showProductosServicios');
    this.dialog.open(ProductosServiciosComponent);
  }

  showSegmentoClientes()
  {
    this.dialog.open(SegmentoClientesComponent);
    console.log('showSegmentoClientes');
  }

  showAlineacionEncaje()
  {
    console.log('showAlineacionEncaje');
    this.dialog.open(AlineacionEncajeComponent);
  }

  showMapaValor()
  {
    this.dialog.open(MapaValorComponent);
  }

  

}

