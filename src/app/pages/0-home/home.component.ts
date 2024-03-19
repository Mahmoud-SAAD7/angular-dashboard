import { Component } from '@angular/core';
import { DashboardComponent } from '../1-Dashboard/dashboard.component';
import { AdminsComponent } from '../2-Admins/admins.component';
import { FreelancersComponent } from '../3-Freelancers/freelancers.component';
import { UsersComponent } from '../4-Users/users.component';
import { CategroiesComponent } from '../5-Categories/categroies.component';
import { ServicesComponent } from '../6-Services/services.component';
import { CoursesComponent } from '../7-Courses/courses.component';
import { OrdersComponent } from '../8-Orders/orders.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet ,SidebarComponent ,DashboardComponent, AdminsComponent, FreelancersComponent, UsersComponent, CategroiesComponent, ServicesComponent, CoursesComponent, OrdersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
