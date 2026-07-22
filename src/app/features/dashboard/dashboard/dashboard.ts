import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {

  applicationName = 'InventoryPro';
  userName = 'Admin';
  totalProducts = 150;
  totalCustomers = 45;
  todaySales = 25000;
  totalRevenue = 125000;
  isLoggedIn = true;

  activities = [
    'Product Added',
    'Customer Registered',
    'Sale Completed'
  ];
}