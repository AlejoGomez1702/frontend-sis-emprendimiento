import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.post(this.API_URL + 'create/herrmann', localStorage.getItem('token'),{
      headers:{
        'Authorization': localStorage.getItem('token')
      }
    });
  }


}
