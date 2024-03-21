import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/1-Dashboard/dashboard.component';
import { UsersComponent } from './pages/4-Users/users.component';
import { AdminsComponent } from './pages/2-Admins/admins.component';
import { FreelancersComponent } from './pages/3-Freelancers/freelancers.component';
import { CategroiesComponent } from './pages/5-Categories/categroies.component';
import { ServicesComponent } from './pages/6-Services/services.component';
import { CoursesComponent } from './pages/7-Courses/courses.component';
import { OrdersComponent } from './pages/8-Orders/orders.component';
import { HomeComponent } from './pages/0-home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {
        path:'', redirectTo:'dashboard', pathMatch:'full'
    },
    {
        path:'home',component:DashboardComponent
    },
    {
        path:'dashboard', component: DashboardComponent
    },
    {
        path:'users', component: UsersComponent
    },
    {
        path:'admins', component: AdminsComponent
    },
    {
        path:"freelancers", component:FreelancersComponent
    },
    {
        path:'categoris',component:CategroiesComponent
    },
    {
        path:'services',component:ServicesComponent
    },
    {
        path: 'courses',component:CoursesComponent
    },
    {
        path:'orders',component:OrdersComponent
    },
    {
        path:'**',component:HomeComponent
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'register',component:RegisterComponent
    }
]