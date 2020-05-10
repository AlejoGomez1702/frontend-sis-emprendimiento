import { Component, OnInit } from '@angular/core';
import { AuthService } from '@myServices/auth.service';
import { MainService } from '@myServices/dashboard/main.service';
import { TokenService } from '@myServices/token.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { User } from '@myInterfaces/user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent implements OnInit 
{
  //Me indica si el usuario ah sido logueado.
  public isLogged: boolean = false;

  /**
   * Usuario que ha iniciado sesión en el sistema.
   */
  public user = {
    name: "",
    surname: "",
    image: ""
  };

  /**
   * Nombre de usuario que se va mostrar en el dashboard.
   */
  public username: string;


  constructor(
    private mainService: MainService,
    private authService: AuthService, 
    private tokenService: TokenService,
    private router: Router,
    private spinner: Ng4LoadingSpinnerService
  ) 
  { 
    this.getLocalUser();
    //this.verifyLogged();
    //this.getUser();
  }

  ngOnInit() 
  {
    //this.getUser();
  }

  getLocalUser()
  {
    this.user = this.mainService.getLocalUser();
    this.username = this.user.name + " " + this.user.surname; 
  }

  verifyLogged()
  {
    let localUser = localStorage.getItem('user');
    let userr = JSON.parse(localUser);

    if(userr.name == 'user')
    {
      this.isLogged = true;
    }

    //console.log('retrievedObject: ', JSON.parse(retrievedObject));
  }

  logout()
  {
    Swal.fire({
      title: '¿Está seguro?',
      text: "Desea cerrar sesión en el sistema",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, salir',
      cancelButtonText:'Cancelar',
      reverseButtons: true
    }).then((result) => {
      
      if (result.value) 
      {
        this.spinner.show();
        this.tokenService.logout();
        this.router.navigateByUrl('/user/login');
      }
    });
  }

  // handleResponse(data){
  //   //this.token.logout();
  //   this.router.navigateByUrl('/user/login')
  // }

  getUser()
  {
    if(this.isLogged)
    {
      let localUser = localStorage.getItem('user');
      let userr = JSON.parse(localUser);

      this.user = userr;
      this.username = this.user.name + " " + this.user.surname; 
    }
    else
    {
      this.mainService.getUser().subscribe(
        data => this.handleResponseUser(data),
        error => this.handleError(error)
      );
    }
    
    //console.log(this.mainService.getUser());
  }
  
  handleResponseUser(data)
  {
    this.user = data.user;
    this.username = this.user.name + " " + this.user.surname; 

    let storageUser = {
      name: data.user.name,
      surname: data.user.surname,
      image: data.user.image
    };

    this.mainService.addUserLocal(storageUser);

    console.log(data);
  }

  handleError(error)
  {
    console.log("Puuuutoooo errorr");
    console.log(error);
  }


}
