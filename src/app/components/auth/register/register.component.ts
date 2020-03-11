import { Component, OnInit } from '@angular/core';
import { AuthService } from '@myServices/auth.service';
import { TokenService } from '@myServices/token.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public form = {
    name:null,
    lastname:null,
    email:null,
    password:null,
    password_confirmation:null
  }

  public error = {
    email:null,
    password:null
  };
  constructor(private service:AuthService,private token:TokenService,private spinner:Ng4LoadingSpinnerService,private router:Router) { }

  addClass()
  {
    let inputs = $('.input100');
    for (let i = 0; i < inputs.length; i++) {
      if($(inputs[i]).val().trim() != ""){
        $(inputs[i]).addClass('has-val')
        $(inputs[i]).addClass('trans')
      }else{
        $(inputs[i]).removeClass('has-val');

      }
    }
  }
  ngOnInit() {
  }

  register()
  {
    this.spinner.show()
    this.service.signup(this.form).subscribe(
      res=>this.handleResponse(res),
      error=>this.handleError(error)
    )
  }

  handleResponse(data){
    this.spinner.hide()
    this.token.createToken(data.access_token);
    this.router.navigateByUrl('/dashboard');
  }

  handleError(error){
    this.spinner.hide()
    if(error.status == 422){
      this.error = error.error.errors
      window.setTimeout(function(){
        $(".alert-danger").fadeTo(4000, 500).slideUp(500)
      },1000)
    }else{
      console.log(error);
    }
    
  }
}
