import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InterpretationHerrmann } from '@myInterfaces/herrmann/interpretation-herrmann';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class HerrmannService 
{
  // public API_URL = "http://localhost:8000/api/";
  public test_id: number;

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
    //console.log('El token es: ');
    //console.log(localStorage.getItem('token'));

    return this.http.post(environment.apiUrl + 'create/herrmann', this.header);
  }

  addActivityHerrmann(form)
  {
    return this.http.post(environment.apiUrl + 'add/activity/' + this.test_id, form, this.header);
  }

  interpretHerrmann(): Observable<[InterpretationHerrmann]>
  {
    return this.http.post<[InterpretationHerrmann]>
        (environment.apiUrl + "interpret/herrmann/" + this.test_id, this.test_id, this.header);
  }

  saveTestId(idTest)
  {
    this.test_id = idTest;
  }




}
