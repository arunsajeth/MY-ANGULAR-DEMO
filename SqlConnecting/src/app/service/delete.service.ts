import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  url:string='http://localhost:3000'
  constructor(private http: HttpClient) { }

  removeproduct(pid:any)
  {
    return this.http.delete(`${this.url}/${pid}`);
  }
}
