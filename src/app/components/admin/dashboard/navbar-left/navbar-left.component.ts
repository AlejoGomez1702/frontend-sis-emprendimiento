import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { TokenService } from '@myServices/token.service';
import { MainService } from '@myServices/dashboard/main.service';
import { User } from '@myInterfaces/user'; 
import { environment } from '@env/environment';
declare var $:any;

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.css']
})
export class NavbarLeftComponent implements OnInit 
{
  /**
   * Usuario que ha iniciado sesión en el sistema.
   */
  public user: User;

  public apiUrl: string;

  /**
   * Nombre de usuario que se va mostrar en el dashboard.
   */
  public username: string;

  constructor(
    private title: Title,
    private token: TokenService,
    private mainService: MainService
  ) 
  { 
    this.title.setTitle('Dashboard');   
    this.initInformation();
    this.getUser();
  }

  ngOnInit() {
    // this.title.setTitle('Dashboard');   
    //this.getUser();
    //this.username = this.user.name + " " + this.user.lastname; 
    //console.log(this.user);
  }

  initInformation()
  {
    this.apiUrl = environment.apiUrl;

    this.user = {
      name: "",
      surname: "",
      image: "general_user.jpeg"
    }
  }

  getUser()
  {
    this.mainService.getUser().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
    //console.log(this.mainService.getUser());
  }
  
  handleResponse(data)
  {
    this.user = data.user;
    this.username = this.user.name + " " + this.user.surname; 
    console.log(data);
  }

  handleError(error){
    //console.log(error)
  }

  addClass()
  {
    setTimeout(function(){
      let variable = $('.has-treeview')
      for (let i = 0; i < variable.length; i++) {
        if($(variable[i]).hasClass('menu-open')){
          $(variable[i]).children().addClass('active');
        }else{
          $(variable[i]).children().removeClass('active');
        }
        
      }
    },400)
  }


}
