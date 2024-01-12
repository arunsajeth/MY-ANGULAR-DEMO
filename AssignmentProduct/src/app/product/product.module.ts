import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }  from '@angular/common/http'
import { ProductComponent } from './product.component';
import { ProductFilterPipe } from './view-employee/product-filter.pipe';
import { FindproductPipe } from './search-employee/findproduct.pipe';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { CustomerComponent } from '../customer/customer.component';

@NgModule({
  declarations: [
    CreateEmployeeComponent,
    ViewEmployeeComponent,
    SearchEmployeeComponent,
    ProductComponent,
    ProductFilterPipe,
    FindproductPipe,
    EditProductComponent,
    HomepageComponent,
    CustomerComponent
    
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    ],
  exports:[CreateEmployeeComponent,ViewEmployeeComponent,SearchEmployeeComponent,EditProductComponent]
})
export class ProductModule { 
  
}
