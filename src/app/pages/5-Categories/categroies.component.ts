import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { CategorisService } from '../../services/categories/categoris.service';
import { TableModule } from 'primeng/table';
import { SubCategoryService } from '../../services/services/sub-category.service';

@Component({
  selector: 'app-categroies',
  standalone: true,
  imports: [TableModule,ReactiveFormsModule],
  templateUrl: './categroies.component.html',
  styleUrl: './categroies.component.css'
})
export class CategroiesComponent {
toggleCategories() {
  this.showAddCat = !this.showAddCat
}
  showSub:boolean=false
  showAddCat:boolean=false
  CategoryId='';
  public subCategoris:any[]=[]
addSubCategory(subCategoryForm:FormGroup) {
if(this.subCategoryForm.valid){
  this.subcategory.addSubCategory(this.subCategoryForm.value).subscribe((data)=>{
    console.log(data)
  })
}else{
  alert('Please fill in all the required fields')
}
}
  
    constructor(private CategorisService: CategorisService,private subcategory: SubCategoryService){}
  
    public Categoris: any[] = []
    ngOnInit(): void {
      this.CategorisService.getallCategories().subscribe((data) => {
        this.Categoris = data
        console.log(this.Categoris)})}
 
  categoryForm= new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),
    CatImgSrc: new FormControl('', [Validators.required]),

  })   
  subCategoryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    subCatImgSrc: new FormControl('', [Validators.required]),
    categoryId: new FormControl(  '', [Validators.required]),

  })   
  public addCategory(categoryForm: FormGroup) {
    if (this.categoryForm.valid) {
      this.CategorisService.addCategory(this.categoryForm.value).subscribe((data) => {
        console.log(data);
        alert('Category added successfully');
  
        this.categoryForm.reset();
      })
    } else{
      alert('Please fill in all the required fields')
      console.log(this.categoryForm.value)
    }}
    
togelSubCategories(_id:string){
this.showSub=!this.showSub
this.CategoryId = _id;
this.subcategory.getSubCategoriesByCatId(_id).subscribe((data)=>{
  this.subCategoris=data
  console.log(this.subCategoris)
})

  // Set the categoryId form control value in the subCategoryForm
  this.subCategoryForm.patchValue({
    categoryId: _id})
}
deleteCategory(arg0: any) {
throw new Error('Method not implemented.');
}
editCategory(arg0: any) {
throw new Error('Method not implemented.');
}

}
