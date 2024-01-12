import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  list:any

  constructor(private eservice: EmployeeService)
  {
    this.eservice.getEmployee(101).subscribe((emp)=>{this.list=emp});
    //this.eservice.getEmployees().subscribe((emp)=>{this.list=emp});
  }

}
