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
  /**
   * Usuario que ha iniciado sesión en el sistema.
   */
  public user: User;

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
    this.getUser();
  }

  ngOnInit() 
  {
    //this.getUser();
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
    this.mainService.getUser().subscribe(
      data => this.handleResponseUser(data),
      error => this.handleError(error)
    );
    //console.log(this.mainService.getUser());
  }
  
  handleResponseUser(data)
  {
    this.user = data.user;
    this.username = this.user.name + " " + this.user.surname; 
    console.log(data);
  }

  handleError(error){
    //console.log(error)
  }


}
