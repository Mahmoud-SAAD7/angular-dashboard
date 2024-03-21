import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Iservice } from '../../interfaces/service';
import { ServicesService } from './../../services/services/services.service';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TableModule,ReactiveFormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})

export class ServicesComponent {
deleteService(id: string) {
this.ServicesService.deleteService(id).subscribe((data) => {
  console.log(data)
})
}
editService(arg0: string) {
throw new Error('Method not implemented.');
}

  public Services: Iservice[] = []
  constructor(private ServicesService: ServicesService) { }
  
  ngOnInit(): void {
    this.ServicesService.getallServices().subscribe((data) => {
      this.Services = data
      console.log(this.Services)
    })
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
      this.ServicesService.createService(serviceForm.value).subscribe((data) => {
        console.log(data);
      })
      console.log(serviceForm); 
      alert('Service added successfully');
    } else {
      alert('Please fill in all the required fields');
      alert(serviceForm.errors)

    }
  }


}
