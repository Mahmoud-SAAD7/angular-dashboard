import { Component } from '@angular/core';
import { ChartsComponent } from '../../components/charts/charts.component';
import { DataService } from '../../services/services/data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  //  get data length
  adminsNumbers: number = 0;
  freelancersNumbers: number = 0;
  usersNumbers: number = 0;
  clientsNumbers: number = 0;
  servicesNumbers: number = 0;
  coursesNumbers: number = 0;
  categoriesNumbers: number = 0;
  subCategoriesNumbers: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    //  get data length
    this.dataService.getDataLength().subscribe((data) => {
      console.log(data);
      this.adminsNumbers = data.admins;
      this.freelancersNumbers = data.freelancers;
      this.usersNumbers = data.users;
      this.clientsNumbers= data.clients;
      this.servicesNumbers = data.services;
      this.coursesNumbers = data.courses;

      this.categoriesNumbers = data.categories;
      this.subCategoriesNumbers = data.subCategories;
    });
  }
}
