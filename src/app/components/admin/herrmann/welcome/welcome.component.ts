import { Component, OnInit } from '@angular/core';
import { HerrmannService } from '@myServices/herrmann.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit 
{
  constructor(
    private herrmannService: HerrmannService,
    private spinner: Ng4LoadingSpinnerService,
    private router: Router,
  ) 
  { }

  ngOnInit() 
  {}

  showSpinner()
  {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000)
  }

  initTest()
  {
    this.showSpinner();
    // console.log('Llamando a la funcion inittest');

    this.herrmannService.createHerrmann().subscribe(
      res => this.handleResponse(res),
      error => this.handleError(error)
    );    
  }

  handleResponse(res)
  {
    console.log('Lo que me retorna el test');
    console.log(res);

    let code = res.code;
    if(code == 200)
    {
      this.herrmannService.saveTestId(res.id_test_creado);
      this.router.navigateByUrl('/dashboard/herrmann/new');
    }
    else
    {
      //Cuadrar el spinner
    }


    //console.log(res);
    //this.spinner.hide();    
    //console.log(res.user.role.name == 'admin');
    
  }

  handleError(err)
  {
    console.log(err.error);
    //this.spinner.hide();
  }


}
