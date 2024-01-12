import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'home',
    component:HomepageComponent
  },
  {
    path:'customer',
    component:CustomerComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
