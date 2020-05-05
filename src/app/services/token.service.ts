import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  
  // private API_URI = "http://aqueous-ridge-01368.herokuapp.com/api"
  public API_URI = "http://localhost:8000/api"
  

  constructor(private http:HttpClient) { }
  
  createToken(token)
  {
    localStorage.setItem('token',token)
  }
  
  refresh() {
     this.http.get(this.API_URI+"/refresh/token").subscribe(
      data=>this.refreshToken(data),
      error=>console.error(error)
    )
  }

  refreshToken(data)
  {
    this.createToken(data);
    location.reload();
  }

  getToken()
  {
    return localStorage.getItem('token');
  }

  isLoggedIn()
  {
    let token = this.getToken()
    if(token){
      return true;
    }
    return false;
  }

  logout()
  {
    //console.log("cerrar sesion");
    localStorage.removeItem('token')
  }
}
