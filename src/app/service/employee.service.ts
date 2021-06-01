import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  apiUri='http://localhost:9000';
  constructor(private http: HttpClient) { }
  
  addEmployee(emp:any){
    console.log(emp)
    return this.http.post(`${this.apiUri}/addFormEmployee`,emp);
  }

  view(){
    return this.http.get(`${this.apiUri}/viewemployee`);
  }
}
