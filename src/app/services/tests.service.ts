import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class TestsService 
{
  public header = {
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  };

  constructor(
    private http: HttpClient
  ) 
  { }

  list()
  {
    return this.http.get(environment.apiUrl + 'tests', this.header);
  }

  listById(id)
  {
    return this.http.get(environment.apiUrl + 'tests/' + id, this.header);
  }

  listByUser()
  {
    return this.http.get(environment.apiUrl + 'tests/by/user', this.header);
  }

  delete(id)
  {
    return this.http.delete(environment.apiUrl + 'delete/test/' + id, this.header);
  }


}
