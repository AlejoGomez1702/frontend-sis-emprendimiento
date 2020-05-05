import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{

  // public API_URI = "http://aqueous-ridge-01368.herokuapp.com/api";
  // public API_URI = "http://localhost:8000/api"

  constructor(private http:HttpClient) 
  { }

  login(form)
  {
    return this.http.post(environment.apiUrl+"login", form);
  }

  signup(form){
    console.log(form);
    return this.http.post(environment.apiUrl+"register",form);
  }

  resetPassword(form){
    return this.http.post(environment.apiUrl+"reset-password",form)
  }

  changePassword(form){
    return this.http.post(environment.apiUrl+"changePassword",form);
  }

  logout(){
    return this.http.get(environment.apiUrl+"logout")
  }
}
