import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private notAcceptedCoursesSource = new BehaviorSubject<any[]>([]);
  notAcceptedCourses$ = this.notAcceptedCoursesSource.asObservable();

  token = localStorage.getItem('token');
  headers = { Authorization: `${this.token}` };
  constructor(private httpClient: HttpClient) {}
  getallCourses(): Observable<any[]> {
    return this.httpClient.get<any[]>(
      'https://sb3aat.onrender.com/api/courses'
    );
  }

  // get not accepted courses
  // getNotAcceptedCourses(): Observable<any[]> {
  //   return this.httpClient.get<any[]>(
  //     'https://sb3aat.onrender.com/api/courses/notAccepted',
  //     { headers: this.headers }
  //   );
  // }

  // get not accepted services
  getNotAcceptedCourses(): Observable<any[]> {
    return this.httpClient.get<any[]>(
      'https://sb3aat.onrender.com/api/courses/notAccepted',
      { headers: this.headers }
    );
  }

  // Update the not accepted services list
  updateNotAcceptedCourses(courses: any[]) {
    this.notAcceptedCoursesSource.next(courses);
  }

  getCourseById(id: string): Observable<any> {
    return this.httpClient.get<any>(
      `https://sb3aat.onrender.com/api/courses/${id}`
    );
  }
  getCourseByFreelancerId(id: string): Observable<any[]> {
    return this.httpClient.get<any[]>(
      `https://sb3aat.onrender.com/api/courses/freelancer/${id}`
    );
  }
  createCourse(course: any): Observable<any> {
    return this.httpClient.post<any>(
      'https://sb3aat.onrender.com/api/courses',
      course
    );
  }
  updateCourse(id: string, course: any): Observable<any> {
    return this.httpClient.put<any>(
      `https://sb3aat.onrender.com/api/courses/${id}`,
      course
    );
  }
  deleteCourse(id: string): Observable<any> {
    return this.httpClient.delete<any>(
      `https://sb3aat.onrender.com/api/courses/${id}`
    );
  }
  acceptCourse(_id: string): Observable<any> {
    return this.httpClient.patch<any>(
      `https://sb3aat.onrender.com/api/courses/accept/${_id}`,
      null,
      { headers: this.headers }
    );
  }
}
