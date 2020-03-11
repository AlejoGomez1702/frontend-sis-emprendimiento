import { Component, OnInit } from '@angular/core';
import { AuthService } from '@myServices/auth.service';
import { TokenService } from '@myServices/token.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent implements OnInit {

  constructor(private service:AuthService, private token:TokenService,private router:Router) { }

  ngOnInit() {
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
        this.service.logout().subscribe(
          data => this.handleResponse(data),
          error => console.error(error)
        );
      }
    });
  }

  handleResponse(data){
    this.token.logout();
    this.router.navigateByUrl('/user/login')
  }


}
