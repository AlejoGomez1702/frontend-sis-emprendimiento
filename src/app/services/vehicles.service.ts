import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  // public API_URI = "http://aqueous-ridge-01368.herokuapp.com/api/vehicles"
  public API_URI = "http://localhost:8000/api/vehicles"

  constructor(
    private http:HttpClient, 
    private token:TokenService
  )
  { }

  list(){
    return this.http.get(this.API_URI);
  }

  edit(id){
    return this.http.get(this.API_URI+"/"+id)
  }

  update(form,id){
    return this.http.put(this.API_URI+"/"+id, form)
  }

  delete(id){
    return this.http.delete(this.API_URI+"/"+id);
  }

  add(form)
  {
    return this.http.post(this.API_URI, form)
  }

  show(id)
  {
    return this.http.get(this.API_URI+"/"+id)
  }

  listAsign(){
    return this.http.get(this.API_URI+"/asign")
  }

  asign(id,id_vehicle){
    return this.http.put(this.API_URI+"/asign/"+id,id_vehicle)
  }
}
