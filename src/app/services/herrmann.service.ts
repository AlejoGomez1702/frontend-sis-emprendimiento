import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HerrmannService 
{

  public API_URL = "http://localhost:8000/api/";

  public header = {
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  };

  constructor(
    private http: HttpClient
  ) 
  { }

  createHerrmann()
  {
    // let headers =  new HttpHeaders().set('Authorization', localStorage.getItem('token'));
    console.log('El token es: ');
    console.log(localStorage.getItem('token'));

    return this.http.post(this.API_URL + 'create/herrmann', this.header);
  }


}
