import { Component } from '@angular/core';
import { Product_Pojo } from '../Product_Pojo';
import { ProductService } from '../product-service/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  prod:Product_Pojo

  constructor(private proserv: ProductService){
    this.prod = new Product_Pojo('','','',0,0,'');
  }

  category=['Phone','Laptop','Bike','Car']

  haserror:boolean=false;
  haserror1:boolean=false;
  haserror2:boolean=false;

  pricevalidation(price:number)
  {
    if(price>0)
    {
      this.haserror=true;
    }
    else
    {
      this.haserror=false;
    }
  }

  qtyvalidation(qty:number)
  {
    if(qty>0)
    {
      this.haserror1=true;
    }
    else
    {
      this.haserror1=false;
    }
  }

  validate(category:any)
  {
    if(category==="default")
    {
      this.haserror2=true
    }
    else
    {
      this.haserror2=false;
    }
  }

  datasubmit()
  {
    const temp = this.proserv.addproduct(this.prod);

    if(temp==='productavailable')
    {
      Swal.fire({
        icon:'error',
        title: 'Product Already Available'
      });
    }
    else
    {
      Swal.fire({
        icon: 'success',
        title: 'Product Added Successfully'
      })
    }

    
  }

}
