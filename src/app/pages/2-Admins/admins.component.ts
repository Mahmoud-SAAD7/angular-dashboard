import { Component } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { UsersService } from '../../services/services/user.service';

@Component({
  selector: 'app-admins',
  standalone: true,
  imports: [],
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.css'
})
export class AdminsComponent {
  admins : IUser[] = [];
  constructor(
    private adminService: UsersService
  ){}
  ngOnInit(): void {

  //  all services
    this.adminService.getallAdmins().subscribe((data:any) => {
      this.admins = data.admins;
      console.log(this.admins);

    });
  };
    deleteUser(id: string) {
      this.adminService.deleteUser(id).subscribe((data) => {
       console.log(data);

      });
  }
}
