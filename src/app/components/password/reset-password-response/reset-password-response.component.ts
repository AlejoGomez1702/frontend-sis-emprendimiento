import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@myServices/auth.service';
declare var $:any;

@Component({
  selector: 'app-reset-password-response',
  templateUrl: './reset-password-response.component.html',
  styleUrls: ['./reset-password-response.component.css']
})
export class ResetPasswordResponseComponent implements OnInit {
  public error = null;
  public form = {
    email:null,
    password:null,
    password_confirmation:null,
    resetToken:null
  }
  constructor(private route:ActivatedRoute,private service:AuthService,private router:Router) { 
    route.queryParams.subscribe(params=>{
      this.form.resetToken = params['token'],
      this.form.email = params['email']
    })
  }

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
    $('#email').addClass('has-val')
  }

  resetPassword(){
    this.service.changePassword(this.form).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleError(error)
    )
  }

  handleResponse(data){
    this.router.navigateByUrl('');
  }

  handleError(error){

  }
}
