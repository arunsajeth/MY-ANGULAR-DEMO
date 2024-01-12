import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formdemos',
  templateUrl: './formdemos.component.html',
  styleUrls: ['./formdemos.component.css']
})
export class FormdemosComponent {

  empform: FormGroup;

  eid: FormControl;

  ename: FormControl;
  
  depts = ['IT','HR','ADMIN']


  constructor(){

      this.eid=new FormControl('',[Validators.required,Validators.minLength(3)])

      this.ename=new FormControl('',[Validators.required,Validators.minLength(5)])

      this.empform=new FormGroup({

      eid:this.eid,

      ename:this.ename,

      sal:new FormControl(),

      dept:new FormControl()})
                               
  }

}
