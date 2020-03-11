import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoutesService 
{  
  // public API_URI = "http://aqueous-ridge-01368.herokuapp.com/api/routes";
  public API_URI = "http://localhost:8000/api/routes"

  constructor(
    private http: HttpClient
  ) 
  { }

  list()
  {
    return this.http.get(this.API_URI,{
      headers:{
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });
  }

  /**
   * Agrega una nueva ruta en la base de datos.
   * @param form 
   */
  add(form)
  {
    //console.log(form);
    return this.http.post(this.API_URI, form, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });
  }

  /**
   * Elimina una ruta del administrador.
   * @param id Identificador de la ruta a eliminar.
   */
  delete(id)
  {
    return this.http.delete(this.API_URI+"/"+id);
  }

  show(id)
  {
    return this.http.get(this.API_URI+"/"+id);
  }

  update(form, id) 
  {
    return this.http.put(this.API_URI+"/"+id,form);
  }

  listAsign(){
    return this.http.get(this.API_URI+"/asign");
  }

  asign(id,form){
    return this.http.put(this.API_URI+"/asign/"+id,form)
  }
}
