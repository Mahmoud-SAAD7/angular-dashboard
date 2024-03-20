import { Iservice } from '../../interfaces/service';
import { ServicesService } from './../../services/services/services.service';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table'; 
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TableModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})

export class ServicesComponent {
deleteService(_id:string) {
throw new Error('Method not implemented.');
}
editService(_id:string) {
throw new Error('Method not implemented.');
}
  public Services: Iservice[] = []
  constructor(private ServicesService: ServicesService){}

  ngOnInit(): void {
    this.ServicesService.getallServices().subscribe((data) => {
      this.Services = data
      console.log(this.Services)
    })
  }
}
