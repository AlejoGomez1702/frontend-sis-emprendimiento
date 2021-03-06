import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { UserData } from '@myInterfaces/userData';

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

  list(): Observable<UserData[]>
  {
    return this.http.get<UserData[]>(environment.apiUrl + 'all/users', this.header);
  }

  delete(id)
  {
    return this.http.delete(environment.apiUrl + 'delete/user/' + id, this.header);
  }

  changeState(id)
  {
    return this.http.post(environment.apiUrl + 'user/change/status/' + id, this.header);
  }

}
