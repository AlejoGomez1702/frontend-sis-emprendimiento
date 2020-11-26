import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaslowService } from '@myServices/maslow.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-welcome-maslow',
  templateUrl: './welcome-maslow.component.html',
  styleUrls: ['./welcome-maslow.component.css']
})
export class WelcomeMaslowComponent implements OnInit 
{

  constructor(
    private spinner: Ng4LoadingSpinnerService,
    private maslowService: MaslowService,
    private router: Router
  ) { }

  ngOnInit() {
  }

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

    this.maslowService.createMaslow().subscribe(
      res => this.handleResponse(res),
      error => this.handleError(error)
    );    
  }

  handleResponse(res)
  {
    console.log('Lo que me retorna el test de Maslow');
    console.log(res);

    let code = res.code;
    if(code == 200)
    {
      this.maslowService.saveTestId(res.id_test_creado);
      this.router.navigateByUrl('/dashboard/maslow/new');
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
