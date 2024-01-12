import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[]=[];
  url:string='http://localhost:3000'

  constructor(private httpclient: HttpClient) {

   }

   getEmployees()
   {
    return this.httpclient.get(this.url)
   }

   getEmployee(eid:number)
   {
      return this.httpclient.get(this.url+'/employee/'+eid)
   }
}
