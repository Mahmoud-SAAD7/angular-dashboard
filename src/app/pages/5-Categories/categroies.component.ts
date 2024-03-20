import { Component } from '@angular/core';
import { CategorisService } from '../../services/categories/categoris.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-categroies',
  standalone: true,
  imports: [TableModule],
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

}
