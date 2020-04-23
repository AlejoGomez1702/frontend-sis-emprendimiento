import { Component, OnInit } from '@angular/core';
import { HerrmannService } from '@myServices/herrmann.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit 
{
  constructor(
    private herrmannService: HerrmannService,
    private spinner:Ng4LoadingSpinnerService
  ) 
  { }

  ngOnInit() 
  {}

  initTest()
  {
    this.spinner.show();

    this.herrmannService.createHerrmann().subscribe(
      res => this.handleResponse(res),
      error => this.handleError(error)
    );    
  }

  handleResponse(res)
  {
    console.log(res);
    this.spinner.hide();    
    //console.log(res.user.role.name == 'admin');
    
  }

  handleError(err)
  {
    console.log(err);
    this.spinner.hide();
  }


}
