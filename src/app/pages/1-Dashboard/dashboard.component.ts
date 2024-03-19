import { Component } from '@angular/core';
import { ChartsComponent } from '../../components/charts/charts.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
