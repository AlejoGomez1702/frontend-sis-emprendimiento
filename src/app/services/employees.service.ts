import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@myInterfaces/user';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService 
{
  // public API_URI = "http://aqueous-ridge-01368.herokuapp.com/api/employees"
  public API_URI = "http://localhost:8000/api/employees"

  constructor(
    private http: HttpClient
  ) 
  { }

  list(): Observable<[User]>
  {
    return this.http.get<[User]>(this.API_URI,{
      headers:{
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });
  }

  add(form)
  {
    return this.http.post(this.API_URI, form, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });
  }

  update(form, id) 
  {
    return this.http.put(this.API_URI+"/"+id, form, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });
  }

  show(id)
  {
    return this.http.get(this.API_URI+"/"+id)
  } 

  delete(id){
    return this.http.delete(this.API_URI+"/"+id)    
  }

}
