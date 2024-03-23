import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iservice } from '../../interfaces/service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private notAcceptedServicesSource = new BehaviorSubject<Iservice[]>([]);
  notAcceptedServices$ = this.notAcceptedServicesSource.asObservable();

  token = localStorage.getItem('token');
  headers = { Authorization: `${this.token}` };
  constructor(private httpClient: HttpClient) {}
  getallServices(): Observable<Iservice[]> {
    return this.httpClient.get<Iservice[]>(
      'https://sb3aat.onrender.com/api/services'
    );
  }

  // get  accepted services
  getAcceptedServices(): Observable<Iservice[]> {
    return this.httpClient.get<Iservice[]>(
      'https://sb3aat.onrender.com/api/services/accepted',
      { headers: this.headers }
    );
    //     return this.http.get(this.profileUrl, { headers });
  }

  // get not accepted services
  getNotAcceptedServices(): Observable<Iservice[]> {
    return this.httpClient.get<Iservice[]>(
      'https://sb3aat.onrender.com/api/services/not-accepted',
      { headers: this.headers }
    );
  }
  // Update the not accepted services list
  updateNotAcceptedServices(services: Iservice[]) {
    this.notAcceptedServicesSource.next(services);
  }
  //  get service
  getServiceById(id: string): Observable<Iservice> {
    return this.httpClient.get<Iservice>(
      `https://sb3aat.onrender.com/api/services/${id}`
    );
  }
  getServicesByFreelancerId(id: string): Observable<Iservice[]> {
    return this.httpClient.get<Iservice[]>(
      `https://sb3aat.onrender.com/api/services/freelancer/${id}`,
      { headers: this.headers }
    );
  }
  createService(service: Iservice): Observable<Iservice> {
    return this.httpClient.post<Iservice>(
      'https://sb3aat.onrender.com/api/services',
      service,
      { headers: this.headers }
    );
  }
  updateService(id: string, service: Iservice): Observable<Iservice> {
    return this.httpClient.put<Iservice>(
      `https://sb3aat.onrender.com/api/services/${id}`,
      service
    );
  }
  deleteService(id: string): Observable<Iservice> {
    return this.httpClient.delete<Iservice>(
      `https://sb3aat.onrender.com/api/services/${id}`
    );
  }
  acceptService(id: string): Observable<Iservice> {
    return this.httpClient.patch<Iservice>(
      `https://sb3aat.onrender.com/api/services/accept/${id}`,
      null,
      { headers: this.headers }
    );
  }
}
