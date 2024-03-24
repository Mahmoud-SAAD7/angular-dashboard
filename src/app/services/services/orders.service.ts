import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient) { }

  getallOrders():Observable<any[]>{
    return this.httpClient.get<any[]>('https://sb3aat.onrender.com/api/orders');
  }
}
