import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit 
{

  public isAdmin: boolean = false;

  constructor() 
  {
    this.verifyRole();
  }

  ngOnInit() {
    
  }

  verifyRole()
  {
    let role = localStorage.getItem('role');
    if(role == 'administrator')
    {
      this.isAdmin = true;
    }
  }

}
