import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Iservice } from '../../interfaces/service';
import { ServicesService } from './../../services/services/services.service';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TableModule, ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  deleteService(_id: string) {
    this.ServicesService.deleteService(_id).subscribe((data) => {
      console.log(data);
    });
  }
  editService(arg0: string) {
    throw new Error('Method not implemented.');
  }

  acceptService(id: string) {
    this.ServicesService.acceptService(id).subscribe((data) => {
      // Update local services list
      const updatedServices = this.notAcceptedServices.filter(
        (service) => service._id !== id
      );
      this.ServicesService.updateNotAcceptedServices(updatedServices);
    });
  }
  public Services: Iservice[] = [];
  public notAcceptedServices: Iservice[] = [];
  public filteredServices: Iservice[] = [];
  public searchQuery: string = '';
  public currentPage: number = 1;
  public itemsPerPage: number = 10;


  constructor(private ServicesService: ServicesService) {}

  ngOnInit(): void {
    // Fetch not accepted services
    this.ServicesService.getNotAcceptedServices().subscribe((data) => {
      this.ServicesService.updateNotAcceptedServices(data);
    });

    this.ServicesService.notAcceptedServices$.subscribe((updatedServices) => {
      this.notAcceptedServices = updatedServices;
      this.filteredServices = this.notAcceptedServices; // Initialize filtered list
    });

    // Fetch all services
    this.ServicesService.getallServices().subscribe((data) => {
      this.Services = data;
    });
  }

  filterServices(): void {
    this.filteredServices = this.notAcceptedServices.filter((service) =>
      service.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  serviceForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    deliveryTime: new FormControl('', [Validators.required]),
    serviceImg: new FormControl('', [Validators.required]),
    freelancerId: new FormControl('', [Validators.required]),
    subCategoryId: new FormControl('', [Validators.required]),
  });

  addService(serviceForm: FormGroup) {
    if (serviceForm.valid) {
      this.ServicesService.createService(serviceForm.value).subscribe(
        (data) => {
          console.log(data);
        }
      );
      console.log(serviceForm);
      alert('Service added successfully');
    } else {
      alert('Please fill in all the required fields');
      alert(serviceForm.errors);
    }
  }
  
}
