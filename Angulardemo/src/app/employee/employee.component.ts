import { Component,Input } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

   @Input() emp:Employee

  constructor()
  {
    this.emp=new Employee(101,"ABC",10000,"IT")
  }

}
