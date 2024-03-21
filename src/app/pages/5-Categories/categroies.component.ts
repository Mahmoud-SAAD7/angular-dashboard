import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { CategorisService } from '../../services/categories/categoris.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-categroies',
  standalone: true,
  imports: [TableModule,ReactiveFormsModule],
  templateUrl: './categroies.component.html',
  styleUrl: './categroies.component.css'
})
export class CategroiesComponent {
  
    constructor(private CategorisService: CategorisService){}
  
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
  public addCategory(categoryForm: FormGroup) {
    if (this.categoryForm.valid) {
      this.CategorisService.addCategory(this.categoryForm.value).subscribe((data) => {
        this.ngOnInit()
      })
    } else{
      alert('Please fill in all the required fields')
      console.log(this.categoryForm.value)
    }}
    

deleteCategory(arg0: any) {
throw new Error('Method not implemented.');
}
editCategory(arg0: any) {
throw new Error('Method not implemented.');
}

}
