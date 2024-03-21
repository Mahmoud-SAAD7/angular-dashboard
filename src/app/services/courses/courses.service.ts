import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }
  getallCourses():Observable<any[]>{
    return this.httpClient.get<any[]>('https://sb3aat.onrender.com/api/courses');
  }
  getCourseById(id:string):Observable<any>{
    return this.httpClient.get<any>(`https://sb3aat.onrender.com/api/courses/${id}`);
  }
  getCourseByFreelancerId(id:string):Observable<any[]>{
    return this.httpClient.get<any[]>(`https://sb3aat.onrender.com/api/courses/freelancer/${id}`);
  }
  createCourse(course:any):Observable<any>{
    return this.httpClient.post<any>('https://sb3aat.onrender.com/api/courses',course);
  }
  updateCourse(id:string,course:any):Observable<any>{
    return this.httpClient.put<any>(`https://sb3aat.onrender.com/api/courses/${id}`,course);
  }
  deleteCourse(id:string):Observable<any>{
    return this.httpClient.delete<any>(`https://sb3aat.onrender.com/api/courses/${id}`);
  }
}
