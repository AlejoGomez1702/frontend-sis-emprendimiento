import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { AuthService } from '@myServices/auth.service';
import { TokenService } from '@myServices/token.service';
import { MainService } from '@myServices/dashboard/main.service';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { User } from '@myInterfaces/user';
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  public user = {
    name: 'User',
    surname: 'User',
    image: 'general_user.jpeg'
  }

  public form = {
      email: null,
      password:null       
  }

  public error = null;

  constructor(
    private title: Title,
    private service: AuthService, 
    private token: TokenService,
    private router: Router,
    private spinner: Ng4LoadingSpinnerService,
    private mainService: MainService
  ) 
  { }

  ngOnInit() 
  {
    this.title.setTitle('Iniciar sesión');
    this.initUserFake();
  }

  initUserFake()
  {
    this.mainService.addUserLocal(this.user);
  }

  addClassEmail()
  {
    if($('#email').val().trim() != "") {
      $('#email').addClass('has-val');
      $('#email').addClass('trans');
    }
    else {
        $('#email').removeClass('has-val');
    }
  }

  addClassPassword()
  {
    if($('#password').val().trim() != "") {
      $('#password').addClass('has-val');
    }
    else {
        $('#password').removeClass('has-val');
    }
  }

  login()
  {
    console.log(this.form);
    this.spinner.show();
    this.service.login(this.form).subscribe(
      res => this.handleResponse(res),
      error => this.handleError(error)
    );

  }

  handleResponse(res)
  {
    console.log("Me devuelve esto al hacer login:")
    console.log(res);
    this.spinner.hide();
    //console.log(res.user.role.name == 'admin');
    
    this.token.createToken(res.token);
    if(res.token)
    {
      
      //Obtengo el usuario logueado.
      // this.mainService.getUser().subscribe(
      //   res => this.handleResponseUser(res),
      //   error => this.handleErrorUser(error)
      // );

      //Almacenar el usuario logueado en el localStorage
      this.mainService.addUserLocal(res.user);


      this.router.navigateByUrl('/dashboard');
    }
  }

  // handleResponseUser(res)
  // {
  //   console.log("El usuario logueado es: ")
  //   console.log(res);
  // }

  // handleErrorUser(error)
  // {
  //   console.log("El usuario logueado es: ERRROOOORRRR")
  //   console.log(error);
  //   //console.log(error.error);
  //   //console.log(error.error.error);
  // }

  handleError(err)
  {
    console.log(err);
    this.spinner.hide();
    this.error = err.error.error;
  }
}
