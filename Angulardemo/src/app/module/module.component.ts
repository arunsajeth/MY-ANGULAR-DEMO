import { Component } from '@angular/core';
import { Employee } from '../employee';
import { employees } from './Employee_List';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {

  list:Employee[]
  hasError:boolean = false;

  emp:Employee
 
  constructor(private eService:EmployeeService)
  {
    this.list=employees
    this.emp= new Employee(0,'',0,'')
    this.list=this.eService.getEmployees()
  }

  depts=['IT','HR','ADMIN','TRAINER','REP'];
  defaultDept = 'all'

  validate(data:string)
  {
    if(data == 'default') 
      this.hasError=true
      else
      this.hasError=false
  }

  dataSubmited()
  {
    console.log(this.emp);
    this.eService.addEmployee(this.emp);
  }

}
