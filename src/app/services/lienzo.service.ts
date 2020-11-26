import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class LienzoService 
{
  public test_id: number;

  public header = {
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  };

  // Información del lienzo actual
  public op1: string[] = [];
  public op2: string[] = [];
  public op3: string[] = [];
  public op4: string[] = [];
  public op5: string[] = [];
  public op6: string[] = [];

  constructor(
    private http: HttpClient
  ) 
  { }

  createLienzo()
  {
    return this.http.post(environment.apiUrl + 'create/lienzo', this.header);
  }

  addActivityLienzo(form)
  {
    return this.http.post(environment.apiUrl + 'add/activity/lienzo/' + this.test_id, form, this.header);
  }

  getInformationLienzo()
  {
    return this.http.get(environment.apiUrl + 'lienzo/information/' + this.test_id, this.header);
  }

  saveLienzo()
  {
    const form = {
      op1: this.op1,
      op2: this.op2,
      op3: this.op3,
      op4: this.op4,
      op5: this.op5,
      op6: this.op6,
    }

    console.log('Lo que se envia de guardar al servidor es: ');
    console.log(form);

    return this.http.post(environment.apiUrl + 'save/lienzo/' + this.test_id, form, this.header);
  }

  saveTestId(idTest)
  {
    this.test_id = idTest;
  }
}
