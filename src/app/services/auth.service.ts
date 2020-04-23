import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{

  // public API_URI = "http://aqueous-ridge-01368.herokuapp.com/api";
  public API_URI = "http://localhost:8000/api"

  constructor(private http:HttpClient) 
  { }

  login(form)
  {
    return this.http.post(this.API_URI+"/login", form);
  }

  signup(form){
    console.log(form);
    return this.http.post(this.API_URI+"/register",form);
  }

  resetPassword(form){
    return this.http.post(this.API_URI+"/reset-password",form)
  }

  changePassword(form){
    return this.http.post(this.API_URI+"/changePassword",form);
  }

  logout(){
    return this.http.get(this.API_URI+"/logout")
  }
}
