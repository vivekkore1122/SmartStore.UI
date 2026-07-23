import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../core/services/dashboard.service';
import { DashboardResponse } from '../../../core/models/dashboard.model';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit {

  constructor(
    private dashboardService: DashboardService
  ) { }

  applicationName = 'InventoryPro';
  userName = 'Admin';
  isLoggedIn = true;

  dashboard: DashboardResponse = {
    totalProducts: 0,
    totalCustomers: 0,
    totalCategories: 0,
    totalOrders: 0,
    recentOrders: []
  };

  ngOnInit(): void {
    this.loadDashboard();
  }

  private loadDashboard(): void {

    this.dashboardService.getDashboard().subscribe({

      next: (response) => {

        console.log('Dashboard Response:', response);

        this.dashboard = response;

      },

      error: (error) => {

        console.error('Error loading dashboard:', error);

      }

    });

  }

}