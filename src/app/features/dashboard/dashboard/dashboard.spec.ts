import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Dashboard } from './dashboard';
import { DashboardService } from '../../../core/services/dashboard.service';

@Component({
  selector: 'app-card',
  template: '<ng-content></ng-content>',
  standalone: false
})
class MockAppCardComponent {}

class MockDashboardService {

  getDashboard() {

    return of({

      totalProducts: 250,
      totalCustomers: 75,
      totalOrders: 48,
      totalRevenue: 12000,
      totalCategories: 12,

      recentOrders: []

    });

  }

}

describe('Dashboard', () => {

  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [

        Dashboard,
        MockAppCardComponent

      ],

      providers: [

        {

          provide: DashboardService,
          useClass: MockDashboardService

        }

      ]

    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

});