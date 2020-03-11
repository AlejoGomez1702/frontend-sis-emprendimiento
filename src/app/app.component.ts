import { Component, OnInit } from '@angular/core';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'Emprendimiento';
  public loggin:boolean = true;

  constructor(private service:TokenService){}

  ngOnInit()
  {
    let token = this.service.getToken();
    if(token){
      this.loggin = false;
    }
  }
}
