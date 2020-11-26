import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class MaslowService 
{

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

  createMaslow()
  {
    return this.http.post(environment.apiUrl + 'create/maslow', this.header);
  }

  addActivityMaslow(form)
  {
    return this.http.post(environment.apiUrl + 'add/activity/maslow/' + this.test_id, form, this.header);
  }

  getBlueSkyIdeas()
  {
    return this.http.get(environment.apiUrl + 'bluesky/maslow/' + this.test_id, this.header)
  }

  getFiveBlueSkyIdeas()
  {
    return this.http.get(environment.apiUrl + 'five/bluesky/maslow/' + this.test_id, this.header)
  }

  selectBlueSkyIdeas(form)
  {
    // console.log('Las ideas seleccionadas son: ');
    return this.http.post(environment.apiUrl + 'confirm/bluesky/maslow/' + this.test_id, form, this.header);
  }

  completeMaslow(form)
  {
    console.log('La información que estoy enviando de maslow es: ');
    console.log(form);
    return this.http.post(environment.apiUrl + 'complete/maslow/' + this.test_id, form, this.header);
  }

  getResultsMaslow()
  {
    return this.http.get(environment.apiUrl + 'results/maslow/' + this.test_id, this.header);
  }

  saveTestId(idTest)
  {
    this.test_id = idTest;
  }

}
