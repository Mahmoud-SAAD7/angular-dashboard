// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'https://sb3aat.onrender.com/api/auth/login';
  private profileUrl = 'https://sb3aat.onrender.com/api/auth/profile';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    console.log({ email, password });
    return this.http.post(this.loginUrl, { email, password });
  }

  getProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `${token}` };
    return this.http.get(this.profileUrl, { headers });
  }
}
