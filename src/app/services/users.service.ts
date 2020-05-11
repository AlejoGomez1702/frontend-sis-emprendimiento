import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService 
{
  public header = {
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  };

  constructor(
    private http: HttpClient
  ) { }

  list()
  {
    return this.http.get(environment.apiUrl + 'all/users', this.header);
  }

}
