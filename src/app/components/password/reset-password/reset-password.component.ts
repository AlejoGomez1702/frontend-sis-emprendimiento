import { Component, OnInit } from '@angular/core';
import { AuthService } from '@myServices/auth.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
declare var $:any;
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public form ={
    email:null
  }
  public error = {
    email:null
  }
  constructor(private service:AuthService,private spinner:Ng4LoadingSpinnerService) { }

  ngOnInit() {
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

  submit()
  {
    this.spinner.show()
    this.service.resetPassword(this.form).subscribe(
      data=>console.log(data),
      error=>this.handleError(error)
    )
  }

  handleError(error){
    this.spinner.hide()
    this.error.email = error.error.error
    window.setTimeout(function(){
      $(".alert-danger").fadeTo(4000, 500).slideUp(500)
    },1000)
    
  }

  handleResponse(){
    this.spinner.hide()
  }
}

