import { IUser } from './../../interfaces/user';
import { Component } from '@angular/core';
import { UsersService } from '../../services/services/user.service';

@Component({
  selector: 'app-admins',
  standalone: true,
  imports: [],
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.css'
})
export class AdminsComponent {
  constructor(private userServices:UsersService){}

  admins: IUser[] = []; // Declare admins as an array of any type

  ngOnInit(): void {
    this.userServices.getallAdmins().subscribe((data:any) => {
      console.log(data);
      this.admins = data.admins;
    });
  };
}
