import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  apiUri='http://localhost:9000';
  constructor(private http: HttpClient) { }


  addoffice(office:any){
    console.log(office)
    return this.http.post(`${this.apiUri}/addFormOffice`,office);
  }

}
