import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LienzoService } from '@myServices/lienzo.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AccionesClienteComponent } from '../dialogs/acciones-cliente/acciones-cliente.component';
import { AlineacionEncajeComponent } from '../dialogs/alineacion-encaje/alineacion-encaje.component';
import { BeneficiosAlegriasClienteComponent } from '../dialogs/beneficios-alegrias-cliente/beneficios-alegrias-cliente.component';
import { BeneficiosAlegriasComponent } from '../dialogs/beneficios-alegrias/beneficios-alegrias.component';
import { ExampleLienzoComponent } from '../dialogs/example-lienzo/example-lienzo.component';
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
    public dialog: MatDialog,
    private spinner: Ng4LoadingSpinnerService,
    private lienzoService: LienzoService,
    private router: Router
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

  showExample()
  {
    this.dialog.open(ExampleLienzoComponent);
  }

  showSpinner()
  {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000)
  }

  /**
   * Inicio de la actividad de Maslow.
   */
  initTest()
  {
    this.showSpinner();

    this.lienzoService.createLienzo().subscribe(
      res => this.handleResponse(res),
      error => this.handleError(error)
    ); 

  }

  handleResponse(res)
  {
    let code = res.code;
    if(code == 200)
    {
      this.lienzoService.saveTestId(res.id_test_creado);
      this.router.navigateByUrl('/dashboard/lienzo/new');
    }
    else
    {
      //Cuadrar el spinner
    }
    
  }

  handleError(err)
  {
    console.log(err.error);
    //this.spinner.hide();
  }

  

}

