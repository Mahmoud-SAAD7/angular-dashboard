import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  menuList = [
    {
      name: 'Dashboard',
      link: 'dashboard',
    },
    {
      name: 'Users',
      link: 'users',
    },
    {
      name: 'Admins',
      link: 'admins',
    },
    {
      name: 'Freelancers',
      link: 'freelancers',
    },
    {
      name: 'Categories',
      link: 'categories',
    },
  ];

  logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }
}
