import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ProductService } from '../product-service/product.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {

  showalert:boolean=false;
  find:string='';
  searchlist:any

  constructor(private service: ProductService)
  {

  }

  viewoper()
  {
    this.searchlist = this.service.searchproduct(this.find.toLowerCase());
    console.log(this.searchlist)

    if(this.searchlist.length===0)
    {
      Swal.fire({
        icon: 'error',
        title: 'Search Data Not Found'
      });
      this.showalert=false;
    }
    else
    {
      Swal.fire({
        icon: 'success',
        title: 'Data found'
      });
      this.showalert=true;
      console.log(this.searchlist)

    }
    
  }
}
