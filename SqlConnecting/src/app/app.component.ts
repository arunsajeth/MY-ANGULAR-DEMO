import { Component } from '@angular/core';
import { DeleteService } from './service/delete.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SqlConnecting';

  pid:any
  list:any

  constructor(private pservice:DeleteService)
  {

  }

  deleteservice()
  {
    this.pservice.removeproduct(this.pid).subscribe((pro)=>{this.list=pro});
  }
}
