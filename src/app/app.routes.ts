import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/1-Dashboard/dashboard.component';
import { UsersComponent } from './pages/4-Users/users.component';
import { AdminsComponent } from './pages/2-Admins/admins.component';
import { FreelancersComponent } from './pages/3-Freelancers/freelancers.component';
import { CategroiesComponent } from './pages/5-Categories/categroies.component';
import { ServicesComponent } from './pages/6-Services/services.component';
import { CoursesComponent } from './pages/7-Courses/courses.component';
import { OrdersComponent } from './pages/8-Orders/orders.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './gaurds/auth.guard';
export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admins',
    component: AdminsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'freelancers',
    component: FreelancersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'categoris',
    component: CategroiesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'services',
    component: ServicesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'orders',
    component: OrdersComponent,

    canActivate: [AuthGuard],
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: LoginComponent,
  },
];
