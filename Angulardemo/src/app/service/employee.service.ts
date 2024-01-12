import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import { employees } from '../module/Employee_List';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList:Employee[];
  constructor() { 
    this.employeeList = employees;
  }

  addEmployee(emp:Employee)
  {
    console.log(emp);
    this.employeeList.unshift(emp);
    console.log(this.employeeList)
    
  }

  getEmployees():Employee[]
  {
    return this.employeeList;
  }}
