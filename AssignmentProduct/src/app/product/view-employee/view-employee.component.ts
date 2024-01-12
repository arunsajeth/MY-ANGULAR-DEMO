import { Component } from '@angular/core';
import { ProductService } from '../product-service/product.service';
import { list } from '../product-list';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {

  list:any
  constructor(private prodser:ProductService)
  {
    this.list=list
  }

  category=['Phone','Laptop','Bike']
  defaultcategory='all'

  removeproduct(pid:any)
  {
    const temp =this.prodser.deleteproduct(pid);

    if(temp==='deleted')
    {
      Swal.fire({
        icon: 'success',
        title: 'Producted Deleted'
      });
    }
  }
}

