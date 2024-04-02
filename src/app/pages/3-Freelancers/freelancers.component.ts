import { Component } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { UsersService } from '../../services/services/user.service';

@Component({
  selector: 'app-freelancers',
  standalone: true,
  imports: [],
  templateUrl: './freelancers.component.html',
  styleUrl: './freelancers.component.css'
})
export class FreelancersComponent {
  freelancers : IUser[] = [];
  constructor(
    private freelancerService: UsersService
  ){}
  ngOnInit(): void {

  //  all services
    this.freelancerService.getFreelancers().subscribe((data:any) => {
      this.freelancers = data.freelancers;
      console.log(this.freelancers);

    });
  };
    deleteUser(id: string) {
      this.freelancerService.deleteUser(id).subscribe((data) => {
       console.log(data);

      });
  }
}
