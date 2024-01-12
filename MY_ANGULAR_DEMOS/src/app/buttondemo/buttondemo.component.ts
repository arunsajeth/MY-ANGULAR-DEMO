import { Component } from '@angular/core';

@Component({
  selector: 'app-buttondemo',
  templateUrl: './buttondemo.component.html',
  styleUrls: ['./buttondemo.component.css']
})
export class ButtondemoComponent {

  /* userchoice:string="true"
  operation = "green"

  operclick(userchoice:string)
  {
    if(userchoice=='true')
    {
      this.userchoice='false'
      this.operation="red"
    }
    else{
      this.userchoice='true'
      this.operation="green"
    }
  } */
  
  emp = [new Employee(101,'ABC',1000,'HR'),new Employee(102,'BBB',2000,'IT'),new Employee(103,'CCC',3000,'ADMIN')]

}
export class Employee
{
    constructor(public eid:number,public ename:string,public salary:number,public dept:string)
  {

  }

}


