import { Injectable } from '@angular/core';
import { list } from '../product-list';
import { Product_Pojo } from '../Product_Pojo';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor()
  {
    this.prodlist=list;
  }

  private prodlist:Product_Pojo[]=[];

  addproduct(prod:Product_Pojo)
  {
    const avaiable = this.prodlist.find(p=>p.pid===prod.pid);

    if(!avaiable)
    {
      this.prodlist.push(prod);
      return '';
    }
    else
    {
      return 'productavailable'
    }

  }

  searchproduct(name:string)
  {
    return this.prodlist.filter(pro=>pro.pname.toLowerCase().includes(name.toLowerCase()));
  }

  deleteproduct(productId : any)
  {
    const i = this.prodlist.findIndex(p=>p.pid===productId);
    if(i!==-1)
    {
      this.prodlist.splice(i,1);
      
    }
    return 'deleted';
  }

  getProductdetails(id:any)
  {
    return this.prodlist.find(prod => prod.pid===id);
  }

  updateproduct(update:any)
  {
    const i = this.prodlist.findIndex(p=> p.pid===update.pid);

    if(i !== -1)
    {
      this.prodlist[i]=update;
    }
  }

}
