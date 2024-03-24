import { Component } from '@angular/core';
import { OrdersService } from '../../services/services/orders.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  constructor(private ordersService: OrdersService) {}

  public Orders: any[] = []
  ngOnInit() {
    this.ordersService.getallOrders().subscribe((data: any) => {
      this.Orders = data;
      console.log(this.Orders);
    });
  }
}
