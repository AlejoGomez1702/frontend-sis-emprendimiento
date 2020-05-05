import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '@myInterfaces/user';
import { GeneralInformation } from '@myInterfaces/general-information';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService 
{
  // public API_URI = "http://aqueous-ridge-01368.herokuapp.com/api/"
  // public API_URI = "http://localhost:8000/api/";

  public header = {
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  };

  constructor(
    private http: HttpClient
  ) 
  { }

  /**
   * Obtiene los datos del usuario que esta logueado.
   */
  getUser()
  {    
    return this.http.get<User>(environment.apiUrl + "me", this.header);
  }

  updateUser(user)
  {
    console.log("Estoy actualizando al usuario");
    console.log(user);
    return this.http.put(environment.apiUrl + "user/update", user, this.header);
  }

  /**
   * Obtiene el número de recurso existentes (rutas,vehiculos, clientes... etc.).
   */
  getGeneralInformation(): Observable<GeneralInformation>
  {
    return this.http.get<GeneralInformation>(environment.apiUrl + "general", this.header);
  }

}
