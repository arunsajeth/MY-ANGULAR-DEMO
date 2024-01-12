import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angulardemo';
  num = (10/3);

  today = new Date();

  emp = new Employee(110,"xyz",20000,'TRAINEE')

  myarr:string[]=['1','2','3','4','5']
}
