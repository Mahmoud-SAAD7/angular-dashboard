import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iservice } from '../../interfaces/service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) { }
  getallServices():Observable<Iservice[]>{
    return this.httpClient.get<Iservice[]>('https://sb3aat.onrender.com/api/services');
  }
  getServiceById(id:string):Observable<Iservice>{
    return this.httpClient.get<Iservice>(`https://sb3aat.onrender.com/api/services/${id}`);
  }
  getServicesByFreelancerId(id:string):Observable<Iservice[]>{
    return this.httpClient.get<Iservice[]>(`https://sb3aat.onrender.com/api/services/freelancer/${id}`);
  }
  updateService(id:string,service:Iservice):Observable<Iservice>{
    return this.httpClient.put<Iservice>(`https://sb3aat.onrender.com/api/services/${id}`,service);
  }
  deleteService(id:string):Observable<Iservice>{
    return this.httpClient.delete<Iservice>(`https://sb3aat.onrender.com/api/services/${id}`);
  }
}
