import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorisService {

  constructor(private httpClient: HttpClient) { }

  getallCategories():Observable<any[]>{
    return this.httpClient.get<any[]>('https://sb3aat.onrender.com/api/categories');}
  
  addCategory(category:any):Observable<any>{
    return this.httpClient.post<any>('https://sb3aat.onrender.com/api/categories',category);}
    
  updateCategory(id:string,category:any):Observable<any>{
    return this.httpClient.put<any>(`https://sb3aat.onrender.com/api/categories/${id}`,category);}
    
  deleteCategory(id:string):Observable<any>{
    return this.httpClient.delete<any>(`https://sb3aat.onrender.com/api/categories/${id}`);}
}
