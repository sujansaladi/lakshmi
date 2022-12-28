import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DellserviceService {

  


  constructor(private http:HttpClient) { }

  getDeatils(){
  return  this.http.get('https://reqres.in/api/users?page=2');

}
}

