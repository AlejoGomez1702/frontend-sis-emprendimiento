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

  getLocalUser()
  {
    var retrievedObject = localStorage.getItem('user');

    return JSON.parse(retrievedObject);
  }

  /**
   * Obtiene los datos del usuario que esta logueado.
   */
  getUser()
  {    
    return this.http.get(environment.apiUrl + "me", this.header);
  }

  updateUser(user)
  {
    console.log("Estoy actualizando al usuario");
    console.log(user);
    return this.http.put(environment.apiUrl + "user/update", user, this.header);
  }

  addUserLocal(user, role?)
  {
    console.log("Me esta llegando al service => ")
    console.log(user);

    let data = {
      name: user.name,
      surname: user.surname,
      image: user.image
    }

    let convertUser = JSON.stringify(data);    
    localStorage.setItem('user', convertUser);
    localStorage.setItem('role', role);
    //console.log(user.name);
  }

  /**
   * Obtiene el número de recurso existentes (rutas,vehiculos, clientes... etc.).
   */
  getGeneralInformation(): Observable<GeneralInformation>
  {
    return this.http.get<GeneralInformation>(environment.apiUrl + "general", this.header);
  }

  verifyRole()
  {
    let role = localStorage.getItem('role');
    if(role == 'administrator')
    {
      return true;
    }

    return false;
  }

}
