export interface RecentOrder {
  id: number;
  customer: string;
  amount: number;
}

export interface DashboardResponse {
  totalProducts: number;
  totalCategories: number;
  totalOrders: number;
  totalCustomers: number;
  recentOrders: RecentOrder[];
}