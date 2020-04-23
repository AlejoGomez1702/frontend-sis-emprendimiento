import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HerrmannService 
{

  public API_URL = "http://localhost:8000/api/";

  constructor(
    private http: HttpClient
  ) 
  { }

  createHerrmann()
  {
    let headers =  new HttpHeaders().set('Authorization', localStorage.getItem('token'));

    return this.http.post(this.API_URL + 'create/herrmann', {
      headers:{
        'Authorization': localStorage.getItem('token')
      }
    });
  }


}
