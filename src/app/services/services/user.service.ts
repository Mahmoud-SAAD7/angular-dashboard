import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../interfaces/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  token = localStorage.getItem('token');
  headers = { Authorization: `${this.token}` };
  constructor(private httpClient: HttpClient) {}

  getallUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(
      'https://sb3aat.onrender.com/api/auth/Users',
      { headers: this.headers }
    );
  }
  getallAdmins(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(
      'https://sb3aat.onrender.com/api/auth/admins',
      { headers: this.headers }
    );
  }
  getallClients(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(
      'https://sb3aat.onrender.com/api/auth/clients',
      { headers: this.headers }
    );
  }
  getFreelancers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(
      'https://sb3aat.onrender.com/api/auth/freelancers',
      { headers: this.headers }
    );
  }
  getUserById(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(
      `https://sb3aat.onrender.com/api/Users/${id}`,
      { headers: this.headers }
    );
  }

  updateUser(id: string, user: IUser): Observable<IUser> {
    return this.httpClient.put<IUser>(
      `https://sb3aat.onrender.com/api/Users/${id}`,
      user,
      { headers: this.headers }
    );
  }

  deleteUser(id: string): Observable<IUser> {
    return this.httpClient.delete<IUser>(
      `https://sb3aat.onrender.com/api/auth/deleteUser/${id}`,
      { headers: this.headers }
    );
  }

  convertToAdmin(id: string): Observable<IUser> {
    console.log(id,this.headers);
    return this.httpClient.patch<IUser>(
      `https://sb3aat.onrender.com/api/auth/convertToAdmin/${id}`,
      null,
      { headers: this.headers }
    );
  }
}
