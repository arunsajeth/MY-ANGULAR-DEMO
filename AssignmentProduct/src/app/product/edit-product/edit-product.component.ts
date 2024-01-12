import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-service/product.service';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  productdetail:any
  editform : FormGroup;
  price : FormControl;
  qty : FormControl
  

  constructor(private route:ActivatedRoute, private service: ProductService, private router: Router)
  {
    this.price = new FormControl("",[Validators.required,Validators.pattern('^[1-9][0-9]*$')]);
    this.qty = new FormControl("",[Validators.required,Validators.pattern('^[1-9][0-9]*$')]);
    this.editform=new FormGroup({
    price : this.price,
    qty : this.qty
    });

  }

  ngOnInit()
  {
    this.route.paramMap.subscribe(parms =>
      { 
        const id = parms.get('pid')
        console.log(id)

        const product = this.service.getProductdetails(id);
        console.log(product)

        this.productdetail=product
      });

      
  }

  datasubmitted()
  {
    console.log('Updating Product!!!')
    
    const upProduct = {
      ...this.productdetail,
      price: this.editform.get('price')?.value,
      qty: this.editform.get('qty')?.value
    };

    this.service.updateproduct(upProduct)

    Swal.fire({
      icon: 'success',
      title: ' Product Updated Successfully '
    });

    this.router.navigateByUrl('/view')

  }

}
