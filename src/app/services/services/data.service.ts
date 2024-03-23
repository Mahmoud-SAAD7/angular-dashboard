// data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataUrl = 'https://sb3aat.onrender.com/api/auth/dataLength';

  constructor(private http: HttpClient) {}

  getDataLength(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `${token}` };
    return this.http.get(this.dataUrl, { headers });
  }
}
