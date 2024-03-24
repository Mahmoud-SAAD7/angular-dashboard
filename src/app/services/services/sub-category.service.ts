import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(private httpClient: HttpClient) { }

  getallSubCategories():Observable<any[]>{
    return this.httpClient.get<any[]>('https://sb3aat.onrender.com/api/subCategories');
  }
  getSubCategoriesByCatId(id:string):Observable<any[]>{
    return this.httpClient.get<any[]>(`https://sb3aat.onrender.com/api/subCategories/category/${id}`);
  }
  addSubCategory(subcategory:any):Observable<any>{
    return this.httpClient.post<any>('https://sb3aat.onrender.com/api/subcategories',subcategory);}
  
  updateSubCategory(id:string,subcategory:any):Observable<any>{
    return this.httpClient.put<any>(`https://sb3aat.onrender.com/api/subcategories/${id}`,subcategory);}
    deleteSubCategory(id:string){
      return this.httpClient.delete<any>(`https://sb3aat.onrender.com/api/subcategories/${id}`);}
  }

