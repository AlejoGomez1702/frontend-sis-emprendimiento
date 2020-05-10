import { Component, OnInit } from '@angular/core';
import { MainService } from '@myServices/dashboard/main.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit 
{
  public ok: boolean = true;

  constructor(
    private mainService: MainService
  ) 
  { 
    //this.registerUserLocal();
    //this.verifyStorageUser();
  }

  ngOnInit() 
  {    
  }

  verifyStorageUser()
  {
    if(this.ok)
    {
      setTimeout(function(){
        if(this.ok)
        {
          location.reload();
          this.ok = false;
        }      
      },3000);
    }
  }

  registerUserLocal()
  {
    this.mainService.getUser().subscribe(
      res => this.handleResponse(res),
      error => this.handleError(error)
    );
  }

  handleResponse(res)
  {
    console.log("Lo que se me esta retornando essss:")
    this.verifyStorageUser();
    console.log(res)
  }

  handleError(error)
  {
    console.log("Lo que se me esta retornando essss errrooorr:")
    console.log(error)
  }

}
