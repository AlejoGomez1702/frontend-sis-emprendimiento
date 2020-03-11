import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { AuthService } from '@myServices/auth.service';
import { TokenService } from '@myServices/token.service';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{

  public form = {
    email: null,
    password:null
  }

  public error = null;

  constructor(
    private title:Title,
    private service:AuthService, 
    private token:TokenService,
    private router:Router,
    private spinner:Ng4LoadingSpinnerService
  ) 
  { }

  ngOnInit() 
  {
    this.title.setTitle('Iniciar sesión')
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
    this.spinner.show();
    this.service.login(this.form).subscribe(
      res => this.handleResponse(res),
      error => this.handleError(error)
    );
  }

  handleResponse(res)
  {
    this.spinner.hide();
    //console.log(res.user.role.name == 'admin');
    
    this.token.createToken(res.access_token);
    if(res.user){
      this.router.navigateByUrl('/dashboard');
    }
  }

  handleError(err)
  {
    this.spinner.hide();
    this.error = err.error.error;
  }
}
