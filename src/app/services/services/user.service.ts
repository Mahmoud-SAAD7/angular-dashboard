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
      'https://sb3aat.onrender.com/api/Users'
    );
  }
  getUserById(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(
      `https://sb3aat.onrender.com/api/Users/${id}`
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
      `https://sb3aat.onrender.com/api/Users/${id}`,
      { headers: this.headers }
    );
  }

  getFreelancers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(
      'https://sb3aat.onrender.com/api/Users/freelancers'
    );
  }
}
