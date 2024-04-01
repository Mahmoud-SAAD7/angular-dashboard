import { Component } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { UsersService } from '../../services/services/user.service';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TableModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
 clients : IUser[] = [];
constructor(
  private userService: UsersService
){}
ngOnInit(): void {

//  all services
  this.userService.getallClients().subscribe((data:any) => {
    this.clients = data.clients;
    console.log(this.clients);

  });
};
convertToAdmin(id: string) {
  this.userService.convertToAdmin(id).subscribe((data) => {
   console.log(data);

  });
}
  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe((data) => {
     console.log(data);

    });
}
}
